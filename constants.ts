import { Curriculum } from './types';

export const SEMESTER_1_CURRICULUM: Curriculum = {
  semester: '2-1',
  units: [
    {
      id: '2-1-1',
      name: '1. 유리수와 순환소수',
      subTopics: [
        { id: '2-1-1-1', name: '유한소수와 무한소수' },
        { id: '2-1-1-2', name: '순환소수와 순환마디' },
        { id: '2-1-1-3', name: '순환소수를 분수로 나타내기' },
        { id: '2-1-1-4', name: '유리수의 대소비교와 연산' }
      ]
    },
    {
      id: '2-1-2',
      name: '2. 식의 계산',
      subTopics: [
        { id: '2-1-2-1', name: '지수법칙 (곱셈, 거듭제곱)' },
        { id: '2-1-2-2', name: '지수법칙 (나눗셈, 분수)' },
        { id: '2-1-2-3', name: '단항식의 계산' },
        { id: '2-1-2-4', name: '다항식의 덧셈과 뺄셈' },
        { id: '2-1-2-5', name: '단항식과 다항식의 혼합 계산' }
      ]
    },
    {
      id: '2-1-3',
      name: '3. 연립방정식',
      subTopics: [
        { id: '2-1-3-1', name: '연립방정식의 기본' },
        { id: '2-1-3-2', name: '가감법과 대입법' },
        { id: '2-1-3-3', name: '복잡한 연립방정식' },
        { id: '2-1-3-4', name: '해가 특수한 연립방정식' },
        { id: '2-1-3-5', name: '연립방정식의 활용' }
      ]
    },
    {
      id: '2-1-4',
      name: '4. 일차부등식',
      subTopics: [
        { id: '2-1-4-1', name: '부등식의 성질' },
        { id: '2-1-4-2', name: '일차부등식의 풀이' },
        { id: '2-1-4-3', name: '복잡한 일차부등식' },
        { id: '2-1-4-4', name: '일차부등식의 활용' }
      ]
    },
    {
      id: '2-1-5',
      name: '5. 일차함수',
      subTopics: [
        { id: '2-1-5-1', name: '일차함수의 뜻과 그래프' },
        { id: '2-1-5-2', name: '절편과 기울기' },
        { id: '2-1-5-3', name: '일차함수 식 구하기' },
        { id: '2-1-5-4', name: '일차함수와 일차방정식' },
        { id: '2-1-5-5', name: '일차함수의 활용' }
      ]
    }
  ]
};

export const SEMESTER_2_CURRICULUM: Curriculum = {
  semester: '2-2',
  units: [
    {
      id: '2-2-1',
      name: '1. 도형의 성질',
      subTopics: [
        { id: '2-2-1-1', name: '이등변삼각형' },
        { id: '2-2-1-2', name: '직각삼각형의 합동' },
        { id: '2-2-1-3', name: '삼각형의 외심' },
        { id: '2-2-1-4', name: '삼각형의 내심' },
        { id: '2-2-1-5', name: '평행사변형' },
        { id: '2-2-1-6', name: '여러 가지 사각형' }
      ]
    },
    {
      id: '2-2-2',
      name: '2. 도형의 닮음',
      subTopics: [
        { id: '2-2-2-1', name: '닮음의 조건' },
        { id: '2-2-2-2', name: '평행선과 길이의 비' },
        { id: '2-2-2-3', name: '각의 이등분선과 닮음' },
        { id: '2-2-2-4', name: '중점 연결 정리' },
        { id: '2-2-2-5', name: '무게중심' },
        { id: '2-2-2-6', name: '닮음의 활용 (넓이/부피)' }
      ]
    },
    {
      id: '2-2-3',
      name: '3. 피타고라스 정리',
      subTopics: [
        { id: '2-2-3-1', name: '피타고라스 정리의 이해' },
        { id: '2-2-3-2', name: '피타고라스 정리의 활용' }
      ]
    },
    {
      id: '2-2-4',
      name: '4. 확률',
      subTopics: [
        { id: '2-2-4-1', name: '경우의 수 (한 줄 세우기/대표 뽑기)' },
        { id: '2-2-4-2', name: '확률의 뜻과 성질' },
        { id: '2-2-4-3', name: '확률의 덧셈과 곱셈' }
      ]
    }
  ]
};

export const ALL_CURRICULUM = [SEMESTER_1_CURRICULUM, SEMESTER_2_CURRICULUM];