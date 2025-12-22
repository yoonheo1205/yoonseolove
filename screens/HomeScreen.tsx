import React from 'react';
import { BookOpen, GraduationCap, ArrowRight } from 'lucide-react';
import { AppMode } from '../types';

interface Props {
  onSelectMode: (mode: AppMode) => void;
}

export default function HomeScreen({ onSelectMode }: Props) {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-10">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">수학 학습 모드를 선택하세요</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          원하는 단원을 집중 공략하거나, 실전 모의고사로 실력을 테스트해보세요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {/* Custom Mode Card */}
        <button 
          onClick={() => onSelectMode('custom')}
          className="group relative flex flex-col p-8 bg-white border-2 border-gray-100 rounded-2xl hover:border-primary hover:shadow-xl transition-all duration-300 text-left"
        >
          <div className="p-3 bg-indigo-50 rounded-lg w-fit mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
            <BookOpen size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">맞춤 학습 (Custom)</h3>
          <p className="text-gray-500 text-sm mb-6">
            특정 단원, 난이도, 문제 수를 자유롭게 설정하여 집중적으로 학습합니다.
          </p>
          <div className="mt-auto flex items-center text-primary font-medium">
            시작하기 <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>

        {/* Mock Exam Card */}
        <button 
          onClick={() => onSelectMode('mock')}
          className="group relative flex flex-col p-8 bg-white border-2 border-gray-100 rounded-2xl hover:border-secondary hover:shadow-xl transition-all duration-300 text-left"
        >
          <div className="p-3 bg-emerald-50 rounded-lg w-fit mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
            <GraduationCap size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">실전 모의고사 (Mock Exam)</h3>
          <p className="text-gray-500 text-sm mb-6">
            실제 시험처럼 다양한 난이도가 섞인 문제를 풀며 실전 감각을 익힙니다. (3:5:2 비율)
          </p>
          <div className="mt-auto flex items-center text-secondary font-medium">
            시험 시작 <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </div>
    </div>
  );
}