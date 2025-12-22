import { Semester, Problem, Difficulty, ExamConfig } from '../types';
import { SEMESTER_1_CURRICULUM, SEMESTER_2_CURRICULUM } from '../constants';
import { generateSemester1Problem } from './generators/semester1';
import { generateSemester2Problem } from './generators/semester2';
import { randomItem, shuffleArray } from './mathUtils';

export const generateProblems = (config: ExamConfig): Problem[] => {
  const problems: Problem[] = [];
  const { mode, semester, questionCount } = config;

  // Determine difficulty distribution
  let difficulties: Difficulty[] = [];
  
  if (mode === 'mock') {
    // 30% Low, 50% Mid, 20% High
    const lowCount = Math.round(questionCount * 0.3);
    const midCount = Math.round(questionCount * 0.5);
    const highCount = questionCount - lowCount - midCount;
    
    for (let i = 0; i < lowCount; i++) difficulties.push('Low');
    for (let i = 0; i < midCount; i++) difficulties.push('Mid');
    for (let i = 0; i < highCount; i++) difficulties.push('High');
  } else {
    // Custom mode: all same difficulty or default to Mid if undefined
    const d = config.difficulty || 'Mid';
    for (let i = 0; i < questionCount; i++) difficulties.push(d);
  }

  // Shuffle difficulties to mix them up
  difficulties = shuffleArray(difficulties);

  const curriculum = semester === '2-1' ? SEMESTER_1_CURRICULUM : SEMESTER_2_CURRICULUM;
  const availableUnitIds = mode === 'mock' 
    ? curriculum.units.map(u => u.id) 
    : config.selectedUnitIds;

  // 한 번 생성할 때 중복 문제가 나오지 않도록, 생성된 문제의 키를 추적한다.
  const usedKeys = new Set<string>();

  const makeKey = (p: Problem) => `${p.unitId}::${p.difficulty}::${p.questionLatex}::${p.answerLatex}`;

  // Generate
  for (let i = 0; i < questionCount; i++) {
    const diff = difficulties[i];

    let problem: Problem | null = null;
    let attempts = 0;

    // 충분히 많은 시도 동안은 "완전 중복"을 피한다.
    while (attempts < 50) {
      const unitId = randomItem(availableUnitIds);

      const candidate =
        semester === '2-1'
          ? generateSemester1Problem(unitId, diff)
          : generateSemester2Problem(unitId, diff);

      const key = makeKey(candidate);
      if (!usedKeys.has(key)) {
        problem = candidate;
        usedKeys.add(key);
        break;
      }
      attempts++;
    }

    // 혹시 거의 모든 템플릿을 소진해도 중복이 계속되면, 마지막 생성값이라도 사용한다.
    if (!problem) {
      const unitId = randomItem(availableUnitIds);
      problem =
        semester === '2-1'
          ? generateSemester1Problem(unitId, diff)
          : generateSemester2Problem(unitId, diff);
      usedKeys.add(makeKey(problem));
    }

    problems.push(problem);
  }

  // Shuffle the final problems list one more time to ensure topic mixing
  return shuffleArray(problems);
};