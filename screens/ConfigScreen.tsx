import React, { useState } from 'react';
import { AppMode, ExamConfig, Semester, Difficulty } from '../types';
import { ALL_CURRICULUM } from '../constants';
import { ChevronLeft, Check } from 'lucide-react';

interface Props {
  mode: AppMode;
  onStart: (config: ExamConfig) => void;
  onBack: () => void;
}

export default function ConfigScreen({ mode, onStart, onBack }: Props) {
  const [semester, setSemester] = useState<Semester>('2-1');
  const [selectedUnits, setSelectedUnits] = useState<string[]>([]);
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [difficulty, setDifficulty] = useState<Difficulty>('Mid');

  const currentCurriculum = ALL_CURRICULUM.find(c => c.semester === semester);

  const toggleUnit = (id: string) => {
    if (selectedUnits.includes(id)) {
      setSelectedUnits(selectedUnits.filter(u => u !== id));
    } else {
      setSelectedUnits([...selectedUnits, id]);
    }
  };

  const handleStart = () => {
    // Validation
    if (mode === 'custom' && selectedUnits.length === 0) {
      alert('최소 하나의 단원을 선택해주세요.');
      return;
    }

    onStart({
      mode,
      semester,
      selectedUnitIds: mode === 'mock' ? [] : selectedUnits, // Mock selects automatically
      questionCount,
      difficulty: mode === 'custom' ? difficulty : undefined
    });
  };

  const selectAllUnits = () => {
    if (currentCurriculum) {
      setSelectedUnits(currentCurriculum.units.map(u => u.id));
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-6 space-y-8 animate-fade-in">
      <button 
        onClick={onBack}
        className="flex items-center text-gray-500 hover:text-gray-900 transition-colors"
      >
        <ChevronLeft size={20} />
        <span className="ml-1">뒤로 가기</span>
      </button>

      <div>
        <h2 className="text-2xl font-bold mb-2">
          {mode === 'custom' ? '맞춤 학습 설정' : '실전 모의고사 설정'}
        </h2>
        <p className="text-gray-500">학습 범위를 설정해주세요.</p>
      </div>

      {/* Semester Selection */}
      <div className="space-y-3">
        <label className="text-sm font-semibold text-gray-700">학기 선택</label>
        <div className="flex gap-4">
          {(['2-1', '2-2'] as Semester[]).map(s => (
            <button
              key={s}
              onClick={() => {
                setSemester(s);
                setSelectedUnits([]); // Reset units on semester change
              }}
              className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all ${
                semester === s 
                  ? 'border-primary bg-primary/5 text-primary font-bold' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {s}학기
            </button>
          ))}
        </div>
      </div>

      {/* Unit Selection (Only Custom) */}
      {mode === 'custom' && currentCurriculum && (
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-semibold text-gray-700">단원 선택</label>
            <button onClick={selectAllUnits} className="text-xs text-primary underline">전체 선택</button>
          </div>
          <div className="grid gap-2">
            {currentCurriculum.units.map(unit => (
              <button
                key={unit.id}
                onClick={() => toggleUnit(unit.id)}
                className={`text-left p-3 rounded-lg border flex items-center justify-between transition-all ${
                  selectedUnits.includes(unit.id)
                    ? 'border-primary bg-indigo-50 text-primary'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span>{unit.name}</span>
                {selectedUnits.includes(unit.id) && <Check size={16} />}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Count */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-gray-700">문제 수</label>
          <div className="grid grid-cols-4 gap-2">
            {[5, 10, 15, 20, 30].map(count => (
              <button
                key={count}
                onClick={() => setQuestionCount(count)}
                className={`py-2 rounded-lg border text-sm font-medium transition-all ${
                  questionCount === count
                    ? 'bg-gray-800 text-white border-gray-800'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {count}문항
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty (Custom Only) */}
        {mode === 'custom' && (
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-700">난이도</label>
            <div className="grid grid-cols-3 gap-2">
              {(['Low', 'Mid', 'High'] as Difficulty[]).map(d => (
                <button
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className={`py-2 rounded-lg border text-sm font-medium transition-all ${
                    difficulty === d
                      ? 'bg-gray-800 text-white border-gray-800'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {d === 'Low' ? '하' : d === 'Mid' ? '중' : '상'}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <button
        onClick={handleStart}
        className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all active:scale-[0.98]"
      >
        문제 생성하기
      </button>
    </div>
  );
}