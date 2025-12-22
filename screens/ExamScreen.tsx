import React, { useEffect, useState, useRef } from 'react';
import { ExamConfig, Problem } from '../types';
import { generateProblems } from '../services/problemService';
import MathJaxText from '../components/MathJax.tsx';
import { ChevronLeft, Download, Eye, EyeOff, RefreshCcw } from 'lucide-react';

interface Props {
  config: ExamConfig;
  onBack: () => void;
}

export default function ExamScreen({ config, onBack }: Props) {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [showAnswers, setShowAnswers] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate problems on mount
    setLoading(true);
    // Small timeout to allow UI to render loading state
    setTimeout(() => {
      const generated = generateProblems(config);
      setProblems(generated);
      setLoading(false);
    }, 100);
  }, [config]);

  const handleDownloadPdf = () => {
    if (!contentRef.current || !(window as any).html2pdf) return;

    // Temporarily hide the "Show Answers" button or ensure answers are handled as desired
    // For this implementation, we print exactly what is seen.
    
    const element = contentRef.current;
    const opt = {
      margin: [10, 10, 10, 10], // mm
      filename: `MathGen_${config.semester}_${new Date().toISOString().slice(0,10)}.pdf`,
      image: { type: 'jpeg', quality: 1.0 }, // Max quality
      html2canvas: { 
        scale: 4, // Higher scale for better resolution (Fixes blurriness)
        useCORS: true, 
        logging: false,
        letterRendering: true
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    (window as any).html2pdf().set(opt).from(element).save();
  };

  const regenerate = () => {
    setLoading(true);
    setShowAnswers(false);
    setTimeout(() => {
      const generated = generateProblems(config);
      setProblems(generated);
      setLoading(false);
    }, 200);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="text-gray-500">새로운 문제를 생성하고 있습니다...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-20">
      {/* Controls */}
      <div className="sticky top-0 bg-white/95 backdrop-blur z-40 py-4 border-b flex flex-wrap gap-2 justify-between items-center px-4 -mx-4 md:mx-0 md:px-0">
        <div className="flex items-center gap-2">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
            <ChevronLeft size={24} />
          </button>
          <h2 className="font-bold text-lg hidden sm:block">
            {config.semester}학기 {config.mode === 'mock' ? '실전 모의고사' : '맞춤 문제'}
          </h2>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={regenerate}
            className="flex items-center gap-1 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <RefreshCcw size={16} /> <span className="hidden sm:inline">재생성</span>
          </button>
          <button 
            onClick={() => setShowAnswers(!showAnswers)}
            className={`flex items-center gap-1 px-3 py-2 text-sm rounded-lg transition-colors ${
              showAnswers ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {showAnswers ? <EyeOff size={16} /> : <Eye size={16} />}
            <span className="hidden sm:inline">{showAnswers ? '정답 숨기기' : '정답 보기'}</span>
          </button>
          <button 
            onClick={handleDownloadPdf}
            className="flex items-center gap-1 px-3 py-2 text-sm bg-primary text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Download size={16} /> <span className="hidden sm:inline">PDF 다운로드</span>
          </button>
        </div>
      </div>

      {/* Exam Paper Area */}
      <div className="bg-white border shadow-sm p-8 min-h-[800px]" id="exam-paper" ref={contentRef}>
        {/* Paper Header */}
        <div className="border-b-2 border-black pb-4 mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-serif font-bold text-black mb-2">
              2학년 {config.semester}학기 수학 평가
            </h1>
            <p className="text-sm text-gray-600">
              {config.mode === 'mock' ? '전범위 실전 모의고사' : '단원별 맞춤 학습'} | 문항 수: {problems.length}
            </p>
          </div>
          <div className="flex gap-4">
            <div className="border border-black px-4 py-2 w-24 h-12 flex items-center justify-center text-sm text-gray-400">
              점수
            </div>
            <div className="border border-black px-4 py-2 w-32 h-12 flex items-center justify-center text-sm font-serif">
              성명 :
            </div>
          </div>
        </div>

        {/* Problems Grid - Two Columns for Print Look */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {problems.map((problem, index) => (
            <div key={problem.id} className="break-inside-avoid flex flex-col">
              <div className="flex gap-2 mb-2">
                <span className="font-bold text-lg w-8 font-serif">{index + 1}.</span>
                <div className="flex-1">
                  <div className="text-gray-900 font-medium leading-relaxed">
                    <MathJaxText text={problem.questionLatex} />
                  </div>
                </div>
              </div>
              
              {/* Workspace for solving */}
              <div className="flex-1 min-h-[100px]"></div>

              {/* Answer Section */}
              {showAnswers && (
                <div className="mt-2 p-3 bg-red-50 border border-red-100 rounded text-red-700 text-sm font-bold animate-fade-in">
                   <span className="mr-2">정답:</span>
                   <MathJaxText inline text={problem.answerLatex} className="inline-block" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}