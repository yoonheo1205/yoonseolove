import React, { useState } from 'react';
import { BookOpen, Calculator, Settings, GraduationCap } from 'lucide-react';
import HomeScreen from './screens/HomeScreen';
import ConfigScreen from './screens/ConfigScreen';
import ExamScreen from './screens/ExamScreen';
import { AppMode, ExamConfig } from './types';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'config' | 'exam'>('home');
  const [mode, setMode] = useState<AppMode>('custom');
  const [examConfig, setExamConfig] = useState<ExamConfig | null>(null);

  const handleModeSelect = (selectedMode: AppMode) => {
    setMode(selectedMode);
    setCurrentScreen('config');
  };

  const handleStartExam = (config: ExamConfig) => {
    setExamConfig(config);
    setCurrentScreen('exam');
  };

  const handleBackToHome = () => {
    setCurrentScreen('home');
    setExamConfig(null);
  };

  const handleBackToConfig = () => {
    setCurrentScreen('config');
  };

  return (
    <div className="min-h-screen flex flex-col max-w-5xl mx-auto bg-white shadow-lg min-h-screen">
      <header className="bg-primary text-white p-4 shadow-md sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={handleBackToHome}
          >
            <Calculator className="w-6 h-6" />
            <h1 className="text-xl font-bold">윤서는 윤이를 좋아해</h1>
          </div>
          <div className="text-sm font-light opacity-90 hidden sm:block">
            Made by Yoon Heo
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-6 overflow-y-auto">
        {currentScreen === 'home' && (
          <HomeScreen onSelectMode={handleModeSelect} />
        )}
        {currentScreen === 'config' && (
          <ConfigScreen 
            mode={mode} 
            onStart={handleStartExam} 
            onBack={handleBackToHome} 
          />
        )}
        {currentScreen === 'exam' && examConfig && (
          <ExamScreen 
            config={examConfig} 
            onBack={handleBackToConfig}
          />
        )}
      </main>

      <footer className="bg-gray-100 p-4 text-center text-xs text-gray-500 border-t">
        <p>© 2024 MathGen Project. Designed for Korean Middle School Curriculum.</p>
      </footer>
    </div>
  );
}