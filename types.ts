export type Semester = '2-1' | '2-2';

export type Difficulty = 'Low' | 'Mid' | 'High';

export interface SubTopic {
  id: string;
  name: string;
}

export interface Unit {
  id: string;
  name: string;
  subTopics: SubTopic[];
}

export interface Curriculum {
  semester: Semester;
  units: Unit[];
}

export type AppMode = 'custom' | 'mock';

export interface ExamConfig {
  mode: AppMode;
  semester: Semester;
  selectedUnitIds: string[]; // Only for custom
  questionCount: number;
  difficulty?: Difficulty; // Only for custom, mock is mixed
}

export interface Problem {
  id: string;
  unitId: string;
  subTopicId?: string; // Optional, for finer grain
  questionLatex: string;
  answerLatex: string; // The correct answer
  explanationLatex?: string; // Optional step-by-step
  difficulty: Difficulty;
  type: 'multiple-choice' | 'short-answer';
  choices?: string[]; // If multiple choice
  correctChoiceIndex?: number;
}