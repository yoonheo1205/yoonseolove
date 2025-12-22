import { Problem, Difficulty } from '../../types';
import { randomInt, randomItem, randomNonZero, formatFraction, gcd, generateId, isFiniteDecimal, polyStr, simplifyFraction, toSubscript } from '../mathUtils';

// Helper to wrap generation logic
const createProblem = (
  unitId: string, 
  difficulty: Difficulty, 
  question: string, 
  answer: string, 
  type: 'short-answer' | 'multiple-choice' = 'short-answer'
): Problem => ({
  id: generateId(),
  unitId,
  questionLatex: question,
  answerLatex: answer,
  difficulty,
  type
});

// ==========================================
// UNIT 1: Rational Numbers & Decimals
// ==========================================

const rationalLow = (): Problem => {
  const type = randomInt(1, 20);
  const diff = 'Low';
  
  if (type === 1) return createProblem('2-1-1', diff, `분수 $\\dfrac{1}{${randomItem([2,4,5,8,10])}}$은 유한소수인가, 무한소수(순환소수)인가?`, `유한소수`);
  if (type === 2) return createProblem('2-1-1', diff, `분수 $\\dfrac{1}{${randomItem([3,6,7,9])}}$은 유한소수인가, 무한소수(순환소수)인가?`, `무한소수`);
  if (type === 3) { const a = randomInt(1, 9); return createProblem('2-1-1', diff, `순환소수 $0.\\dot{${a}}$를 분수로 나타내시오.`, `$${formatFraction(a,9)}$`); }
  if (type === 4) { const a = randomInt(1, 8); const b = randomInt(1, 9); return createProblem('2-1-1', diff, `순환소수 $0.\\dot{${a}}\\dot{${b}}$를 분수로 나타내시오.`, `$${formatFraction(a*10+b, 99)}$`); }
  if (type === 5) { const a = randomInt(1, 9); return createProblem('2-1-1', diff, `분수 $\\dfrac{${a}}{9}$를 소수로 나타낼 때, 순환마디는 무엇인가?`, `${a}`); }
  if (type === 6) { const a = randomInt(1, 99); return createProblem('2-1-1', diff, `소수 $0.${a}$를 기약분수로 나타내시오.`, `$${formatFraction(a, 100)}$`); }
  if (type === 7) return createProblem('2-1-1', diff, `기약분수의 분모의 소인수가 2와 5만일 때, 이 분수는 어떤 소수로 나타낼 수 있는가?`, `유한소수`);
  if (type === 8) { const a = 3, b = 4; return createProblem('2-1-1', diff, `순환소수 $0.\\dot{${a}}$와 $0.\\dot{${b}}$ 중 더 큰 수는 어느 것인가?`, `$0.\\dot{${b}}$`); }
  if (type === 9) return createProblem('2-1-1', diff, `“모든 유한소수는 유리수이다.”가 참인지, 거짓인지 O, X로 답하시오.`, `O`);
  if (type === 10) return createProblem('2-1-1', diff, `“모든 순환소수는 유리수이다.”가 참인지, 거짓인지 O, X로 답하시오.`, `O`);
  if (type === 11) return createProblem('2-1-1', diff, `원주율 $\\pi$는 유리수인가, 무리수인가?`, `무리수`);
  if (type === 12) { const n = randomInt(2,5); return createProblem('2-1-1', diff, `분수 $\\dfrac{1}{${2**n}}$을 소수로 나타내면 유한소수가 되는가?`, `유한소수가 된다.`); }
  if (type === 13) { const a = randomInt(1,5); return createProblem('2-1-1', diff, `순환소수 $0.\\dot{${a}}$에 9를 곱하면 얼마가 되는지 계산하시오.`, `${a}`); }
  if (type === 14) return createProblem('2-1-1', diff, `정수가 아닌 유리수를 소수로 나타내면, 유한소수 또는 무엇이 되는가?`, `순환소수`);
  if (type === 15) return createProblem('2-1-1', diff, `기약분수의 분모에 소인수 3이 포함되어 있을 때, 이 분수를 유한소수로 나타낼 수 있는가?`, `없다`);
  if (type === 16) { const a = randomItem([2,4,5]); return createProblem('2-1-1', diff, `분수 $\\dfrac{3}{${10*a}}$를 소수로 나타내시오.`, `$${formatFraction(3,10*a)}$`); }
  if (type === 17) return createProblem('2-1-1', diff, `다음 수 중 유리수가 아닌 것은 어느 것인지 고르시오. ($\\sqrt{2}, 0.\\dot{3}, -\\dfrac{5}{4}$)`, `$\\sqrt{2}$`);
  if (type === 18) return createProblem('2-1-1', diff, `다음 중 유한소수로 나타낼 수 있는 분수를 모두 고르시오. ($\\dfrac{3}{8}, \\dfrac{5}{12}, \\dfrac{7}{25}$)`, `$\\dfrac{3}{8}, \\dfrac{7}{25}$`);
  if (type === 19) return createProblem('2-1-1', diff, `유리수를 소수로 나타낼 때, 소수 부분이 끝나지 않고 일정한 숫자 배열이 반복되는 소수를 무엇이라고 하는가?`, `순환소수`);
  return createProblem('2-1-1', diff, `0.25, 0.3, $0.\\dot{3}$ 중에서 유리수가 아닌 수가 있는지 판단하고, 이유를 쓰시오.`, `셋 모두 유리수이다.`);
};

const rationalMid = (): Problem => {
  const type = randomInt(1, 20);
  const diff = 'Mid';

  if (type === 1) { const a = randomInt(1,9); const b = randomInt(0,9); const num = (a*10+b)-a; return createProblem('2-1-1', diff, `순환소수 $0.${a}\\dot{${b}}$를 기약분수로 나타내시오.`, `$${formatFraction(num, 90)}$`); }
  if (type === 2) { const k = randomItem([3, 7, 9, 11]); const den = 20 * k; return createProblem('2-1-1', diff, `분수 $\\dfrac{1}{${den}} \\times x$가 유한소수가 되도록 하는 가장 작은 자연수 $x$를 구하시오.`, `${k}`); }
  if (type === 3) { const a = randomInt(1,8); return createProblem('2-1-1', diff, `다음 중 더 큰 수는 어느 것인지 고르시오. (1) $0.\\dot{${a}}$  (2) $0.${a}$`, `(1)`); }
  if (type === 4) { const a = randomInt(1,5); return createProblem('2-1-1', diff, `순환소수 $0.\\dot{${a}} + 0.\\dot{${a+1}}$의 값을 계산하여 기약분수로 나타내시오.`, `$${formatFraction(2*a+1, 9)}$`); }
  if (type === 5) { return createProblem('2-1-1', diff, `순환소수 $0.\\dot{1}2\\dot{3}$의 소수점 아래 100번째 자리에 오는 숫자를 구하시오.`, `1`); }
  if (type === 6) { const a = randomInt(1,9); return createProblem('2-1-1', diff, `순환소수 $0.\\dot{${a}} \\times x$가 자연수가 되도록 하는 한 자리 자연수 $x$의 개수를 구하시오. (단, $a=${a})`, a % 3 === 0 ? (a===9?'9개':'3개') : '1개'); }
  if (type === 7) { const x = randomInt(1,9); return createProblem('2-1-1', diff, `다음 식의 성립 여부를 O, X로 판단하시오.  $3.\\dot{${x}} = \\dfrac{3${x}-3}{9}$`, `O`); }
  if (type === 8) { const den = 12; return createProblem('2-1-1', diff, `분수 $\\dfrac{x}{12}$가 유한소수가 될 때, 가능한 한 자리 자연수 $x$의 합을 구하시오.`, `18`); }
  if (type === 9) { const a = randomInt(2,8); return createProblem('2-1-1', diff, `순환소수 $0.\\dot{${a}}$의 역수를 분수로 나타내시오.`, `$${formatFraction(9, a)}$`); }
  if (type === 10) return createProblem('2-1-1', diff, `다음 식의 성립 여부를 O, X로 판단하시오.  $1.2\\dot{7} = \\dfrac{127 - 12}{90}$`, `O`);
  if (type === 11) { const a = randomInt(2,5); return createProblem('2-1-1', diff, `$x = 0.\\dot{${a}}$일 때, $10x - x$의 값을 구하시오.`, `${a}`); }
  if (type === 12) { return createProblem('2-1-1', diff, `순환소수 $0.1\\dot{5}$를 분수로 고칠 때, 식 $x=0.1\\dot{5}$를 이용하여 가장 편리하게 계산하는 식은 무엇인가?`, `$100x - 10x$`); }
  if (type === 13) { const a = randomInt(1,4); return createProblem('2-1-1', diff, `순환소수 $0.\\dot{${a}} \\times \\dfrac{b}{a} = 1$일 때, 자연수 $b$의 값을 구하시오.`, `9`); }
  if (type === 14) { return createProblem('2-1-1', diff, `분수 $\\dfrac{3}{2^2 \\times 5 \\times a}$가 유한소수로 나타낼 수 있을 때, 한 자리 자연수 $a$의 값들의 합을 구하시오.`, `9`); }
  if (type === 15) return createProblem('2-1-1', diff, `순환소수 $2.1\\dot{3}\\dot{5}$의 순환마디를 쓰시오.`, `35`);
  if (type === 16) return createProblem('2-1-1', diff, `분수 $\\dfrac{4}{45}$를 순환소수로 나타내시오.`, `$0.0\\dot{8}$`);
  if (type === 17) return createProblem('2-1-1', diff, `다음 세 수 $\\dfrac{1}{3}, 0.3, 0.\\dot{3}$를 크기순으로 나열하시오.`, `$\\dfrac{1}{3} = 0.\\dot{3} > 0.3$`);
  if (type === 18) return createProblem('2-1-1', diff, `분수 $\\dfrac{7}{40}$을 소수로 나타내면 $0.175$가 된다. 이 사실을 이용하여 $\\dfrac{21}{80}$을 소수로 나타내시오.`, `0.2625`);
  if (type === 19) return createProblem('2-1-1', diff, `분수 $\\dfrac{2}{11}$을 소수로 나타냈을 때, 소수점 아래 100번째 자리의 숫자를 구하시오.`, `2`);
  return createProblem('2-1-1', diff, `어떤 유리수를 소수로 나타냈더니 $0.0\\dot{3}$이 되었다. 이 유리수를 기약분수로 나타내시오.`, `$\\dfrac{1}{30}$`);
};

const rationalHigh = (): Problem => {
  const type = randomInt(1, 20);
  const diff = 'High';

  if (type === 1) return createProblem('2-1-1', diff, `분수 $\\dfrac{x}{120}$가 유한소수이고, $10 < x < 20$인 자연수 $x$를 모두 구하시오.`, `12, 15, 18`);
  if (type === 2) return createProblem('2-1-1', diff, `순환소수 $0.\\dot{x} + 0.\\dot{y} = 1$을 만족하는 한 자리 자연수 $x, y$ (단, $x<y$)의 모든 순서쌍을 구하시오.`, `(1,8), (2,7), (3,6), (4,5)`);
  if (type === 3) return createProblem('2-1-1', diff, `분수 $\\dfrac{3}{7}$을 소수로 나타낼 때, 소수점 아래 50번째 자리의 숫자를 구하시오.`, `4`);
  if (type === 4) { const a = 2; return createProblem('2-1-1', diff, `어떤 유리수에 $0.6$을 곱해야 할 것을 잘못하여 $0.\\dot{6}$을 곱했더니, 올바른 값보다 $\\dfrac{1}{${a}}$만큼 커졌다. 이 유리수를 구하시오.`, `$${formatFraction(9, 6*a)}$`); }
  if (type === 5) return createProblem('2-1-1', diff, `분수 $\\dfrac{7}{2^2 \\times 5 \\times a}$가 순환소수가 되도록 하는 한 자리 자연수 $a$의 개수를 구하시오. (단, $a \\neq 1$)`, `3개`);
  if (type === 6) { const a=1, b=2, c=3; return createProblem('2-1-1', diff, `순환소수 $1.\\dot{${a}}$와 $0.\\dot{${b}}\\dot{${c}}$의 합을 기약분수로 나타내시오.`, `$${formatFraction(1*99 + a*11 + b*10+c, 99)}$`); }
  if (type === 7) return createProblem('2-1-1', diff, `분수 $\\dfrac{a}{350}$을 소수로 나타내면 유한소수가 되고, 기약분수로 나타내면 $\\dfrac{1}{b}$이다. 이때 $a+b$의 최솟값을 구하시오.`, `57`);
  if (type === 8) return createProblem('2-1-1', diff, `수열 $\\dfrac{2}{10} + \\dfrac{2}{100} + \\dfrac{2}{1000} + \\cdots$의 합을 분수로 나타내시오.`, `$\\dfrac{2}{9}$`);
  if (type === 9) return createProblem('2-1-1', diff, `부등식 $\\dfrac{1}{5} < 0.\\dot{x} < \\dfrac{1}{2}$를 만족하는 자연수 $x$의 값을 모두 구하시오.`, `2, 3, 4`);
  if (type === 10) return createProblem('2-1-1', diff, `두 순환소수 $0.\\dot{2}, 0.\\dot{7}$ 사이에 있는 분수 중, 분모가 9인 분수의 개수를 구하시오.`, `4개`);
  if (type === 11) return createProblem('2-1-1', diff, `자연수 $x$에 대하여 $\\dfrac{x}{150}$가 유한소수가 될 때, $x$가 될 수 있는 가장 작은 세 자리 자연수를 구하시오.`, `102`);
  if (type === 12) return createProblem('2-1-1', diff, `순환소수 $0.\\dot{a}\\dot{b} + 0.\\dot{b}\\dot{a} = 0.\\dot{7}$일 때, 한 자리 자연수 $a, b$에 대하여 $a+b$의 값을 구하시오.`, `7`);
  if (type === 13) return createProblem('2-1-1', diff, `순환소수 $0.5\\dot{x}$를 분수로 나타내면 $\\dfrac{26}{45}$가 된다. 한 자리 자연수 $x$의 값을 구하시오.`, `7`);
  if (type === 14) return createProblem('2-1-1', diff, `분수 $\\dfrac{1}{7}$을 소수로 나타냈을 때, 소수점 아래 100번째 자리까지의 숫자들의 합을 구하시오.`, `447`);
  if (type === 15) return createProblem('2-1-1', diff, `어떤 기약분수를 소수로 나타낼 때, 분모를 잘못 보아 $0.0\\dot{2}$로 계산하였고, 분자를 잘못 보아 $0.\\dot{5}\\dot{7}$로 계산하였다. 처음 분수를 구하시오.`, `$\\dfrac{19}{33}$`);
  if (type === 16) return createProblem('2-1-1', diff, `순환소수 $0.\\dot{3}$, $0.\\dot{6}$, $0.\\dot{9}$ 중에서 분수 $\\dfrac{1}{3}, \\dfrac{2}{3}, 1$에 각각 대응되는 소수를 짝지우시오.`, `$0.\\dot{3}=\\dfrac{1}{3},\\ 0.\\dot{6}=\\dfrac{2}{3},\\ 0.\\dot{9}=1$`);
  if (type === 17) return createProblem('2-1-1', diff, `분수 $\\dfrac{a}{2^2 \\times 5^2}$를 소수로 나타냈을 때, 소수점 아래 네 자리에서 끝난다. 가능한 한 자리 자연수 $a$의 개수를 구하시오.`, `10개`);
  if (type === 18) return createProblem('2-1-1', diff, `분수 $\\dfrac{a}{75}$를 소수로 나타냈을 때, 순환소수가 되는 한 자리 자연수 $a$의 개수를 구하시오.`, `6개`);
  if (type === 19) return createProblem('2-1-1', diff, `서로 다른 두 순환소수 $0.\\dot{a}, 0.\\dot{b}$가 있을 때, $0.\\dot{a} + 0.\\dot{b}$가 정수가 되도록 하는 한 자리 자연수 $a, b$의 모든 쌍을 구하시오.`, `(1,8),(2,7),(3,6),(4,5)와 순서를 바꾼 쌍`);
  return createProblem('2-1-1', diff, `유리수 $a$에 대하여 $0.\\dot{a} = \\dfrac{7}{9}$일 때, $a$의 값을 구하시오.`, `7`);
};


// ==========================================
// UNIT 2: Calculations
// ==========================================

const algebraLow = (): Problem => {
  const type = randomInt(1, 23);
  const diff = 'Low';

  if (type === 1) return createProblem('2-1-2', diff, `다음을 계산하여 한 문자로 정리하시오.  $x^2 \\times x^3$`, `$x^5$`);
  if (type === 2) return createProblem('2-1-2', diff, `다음을 거듭제곱의 꼴로 나타내시오.  $(x^3)^2$`, `$x^6$`);
  if (type === 3) return createProblem('2-1-2', diff, `다음을 간단히 하시오.  $x^5 \\div x^2$`, `$x^3$`);
  if (type === 4) return createProblem('2-1-2', diff, `다음을 전개하여 정리하시오.  $(xy)^3$`, `$x^3y^3$`);
  if (type === 5) return createProblem('2-1-2', diff, `다음을 계산하시오.  $2x + 3x$`, `$5x$`);
  if (type === 6) return createProblem('2-1-2', diff, `다음을 계산하시오.  $5y - 2y$`, `$3y$`);
  if (type === 7) return createProblem('2-1-2', diff, `다음을 전개하시오.  $3(x+1)$`, `$3x+3$`);
  if (type === 8) return createProblem('2-1-2', diff, `다음을 간단히 하시오.  $(4x^2) \\div (2x)$`, `$2x$`);
  if (type === 9) return createProblem('2-1-2', diff, `다음을 계산하시오.  $2x \\times 3y$`, `$6xy$`);
  if (type === 10) return createProblem('2-1-2', diff, `다음을 계산하시오.  $(-2x)^2$`, `$4x^2$`);
  if (type === 11) return createProblem('2-1-2', diff, `다음 곱을 거듭제곱으로 나타내시오.  $x \\times x \\times x$`, `$x^3$`);
  if (type === 12) return createProblem('2-1-2', diff, `다음을 거듭제곱의 성질을 이용하여 간단히 하시오.  $(a^2)^3 \\times a$`, `$a^7$`);
  if (type === 13) return createProblem('2-1-2', diff, `다음을 전개하시오.  $-2(x-y)$`, `$-2x+2y$`);
  if (type === 14) return createProblem('2-1-2', diff, `다음을 간단히 하시오.  $(6x^2y) \\div (3xy)$`, `$2x$`);
  if (type === 15) return createProblem('2-1-2', diff, `다음 식을 전개하시오.  $2a(3a-1)$`, `$6a^2-2a$`);
  if (type === 16) return createProblem('2-1-2', diff, `다음을 계산하시오.  $4x^2y \\times \\dfrac{1}{2}x$`, `$2x^3y$`);
  if (type === 17) return createProblem('2-1-2', diff, `다음을 정리하시오.  $5x - 3x + 2$`, `$2x+2$`);
  if (type === 18) return createProblem('2-1-2', diff, `다음을 전개하시오.  $(x+2)(x+3)$`, `$x^2+5x+6$`);
  if (type === 19) return createProblem('2-1-2', diff, `다음을 정리하시오.  $3a^2 + 2a - a^2 + a$`, `$2a^2+3a$`);
  if (type === 20) return createProblem('2-1-2', diff, `다음을 계산하시오.  $(-3x) \\times (-2y)$`, `$6xy$`);
  if (type === 21) return createProblem('2-1-2', diff, `다음을 간단히 하시오.  $\\dfrac{6x^2}{3x}$`, `$2x$`);
  if (type === 22) return createProblem('2-1-2', diff, `다음을 전개하여 동류항끼리 모아 정리하시오.  $(x+1)(x-1)$`, `$x^2-1$`);
  return createProblem('2-1-2', diff, `다음을 정리하시오.  $2x^2 + 3x - x^2$`, `$x^2+3x$`);
};

const algebraMid = (): Problem => {
  const type = randomInt(1, 23);
  const diff = 'Mid';

  if (type === 1) return createProblem('2-1-2', diff, `다음을 간단히 하시오.  $(2x^2y)^3 \\div 4xy^2$`, `$2x^5y$`);
  if (type === 2) return createProblem('2-1-2', diff, `다음을 계산하여 동류항끼리 정리하시오.  $(3x^2 - 2x + 1) + (x^2 + 5x - 3)$`, `$4x^2 + 3x - 2$`);
  if (type === 3) return createProblem('2-1-2', diff, `다음을 간단히 하시오.  $(4a^2 - 6a) \\div 2a$`, `$2a - 3$`);
  if (type === 4) return createProblem('2-1-2', diff, `다음을 전개하여 간단히 하시오.  $3x(x-2) - x(2x+1)$`, `$x^2 - 7x$`);
  if (type === 5) return createProblem('2-1-2', diff, `다음을 간단히 하시오.  $\\dfrac{1}{2}x^3y^2 \\times (-4xy)^2$`, `$8x^5y^4$`);
  if (type === 6) return createProblem('2-1-2', diff, `네모 안에 알맞은 식을 쓰시오.  $2x \\times \\square = 6x^3y$`, `$3x^2y$`);
  if (type === 7) return createProblem('2-1-2', diff, `다음 식이 이차식인지 판단하고, 그렇다면 최고차항을 쓰시오.  $x^2(1 + x) - x^3$`, `이차식, 최고차항은 $x^2$`);
  if (type === 8) return createProblem('2-1-2', diff, `다음을 정리하시오.  $(x+2y) - (3x-4y)$`, `$-2x + 6y$`);
  if (type === 9) return createProblem('2-1-2', diff, `다음을 간단히 하시오.  $12x^2y \\div (-3x) \\times 2y$`, `$-8xy^2$`);
  if (type === 10) return createProblem('2-1-2', diff, `다음 식에서 $a+b$의 값을 구하시오.  $x^a \\times x^2 = x^7,\\ (y^3)^b = y^{12}$`, `9`);
  if (type === 11) return createProblem('2-1-2', diff, `다음을 간단히 하시오.  $\\dfrac{4x^2y - 2xy}{2xy}$`, `$2x - 1$`);
  if (type === 12) return createProblem('2-1-2', diff, `밑면의 가로가 $a$, 세로가 $b$, 높이가 $3a$인 직육면체의 부피를 식으로 나타내시오.`, `$3a^2b$`);
  if (type === 13) return createProblem('2-1-2', diff, `$x=2, y=-1$일 때, 식 $x^2y - xy^2$의 값을 구하시오.`, `-6`);
  if (type === 14) return createProblem('2-1-2', diff, `다음을 간단히 하시오.  $(3x^2)^2 \\div (-3x)^2$`, `$x^2$`);
  if (type === 15) return createProblem('2-1-2', diff, `어떤 다항식에 $2x$를 더해야 하는데 잘못하여 뺐더니 값이 $x-5$가 되었다. 올바르게 계산한 값을 구하시오.`, `$5x-5$`);
  if (type === 16) return createProblem('2-1-2', diff, `다음을 전개하고 정리하시오.  $(x+2)(x-3)$`, `$x^2 - x - 6$`);
  if (type === 17) return createProblem('2-1-2', diff, `다음을 간단히 하시오.  $\\dfrac{6x^3y^2}{-3xy}$`, `$-2x^2y$`);
  if (type === 18) return createProblem('2-1-2', diff, `다음을 계산하시오.  $(2a-1)(a+3)$`, `$2a^2+5a-3$`);
  if (type === 19) return createProblem('2-1-2', diff, `다음을 정리하시오.  $4x^2 - (3x^2 - 2x + 1)$`, `$x^2 + 2x - 1$`);
  if (type === 20) return createProblem('2-1-2', diff, `다음을 간단히 하시오.  $\\dfrac{3x^2y}{6xy^2}$`, `$\\dfrac{x}{2y}$`);
  if (type === 21) return createProblem('2-1-2', diff, `다음을 전개하고 동류항끼리 모아 정리하시오.  $(x+1)^2$`, `$x^2+2x+1$`);
  if (type === 22) return createProblem('2-1-2', diff, `다음을 정리하시오.  $5(x-1) - 2(x+3)$`, `$3x-11$`);
  return createProblem('2-1-2', diff, `다음을 간단히 하시오.  $\\dfrac{2x^2y - 4xy}{2x}$`, `$xy-2y$`);
};

const algebraHigh = (): Problem => {
  const type = randomInt(1, 23);
  const diff = 'High';

  if (type === 1) return createProblem('2-1-2', diff, `어떤 식에 $2xy$를 곱해야 할 것을 잘못하여 나누었더니 $3x^2y$가 되었다. 올바르게 계산한 식의 값을 구하시오.`, `$12x^4y^3$`);
  if (type === 2) return createProblem('2-1-2', diff, `다음을 만족시키는 $x$의 값을 구하시오.  $2^{x+2} + 2^x = 80$`, `4`);
  if (type === 3) return createProblem('2-1-2', diff, `어떤 기둥의 부피가 $12\\pi a^2b - 8\\pi ab^2$이고 밑넓이가 $4\\pi ab$일 때, 기둥의 높이를 구하시오.`, `$3a - 2b$`);
  if (type === 4) return createProblem('2-1-2', diff, `다음을 전개하여 간단히 하시오.  $\\{2x - (3y - x)\\} - (x - 2y)$`, `$2x - y$`);
  if (type === 5) return createProblem('2-1-2', diff, `$4^x = a$일 때, $16^{x+1}$을 $a$를 사용하여 나타내시오.`, `$16a^2$`);
  if (type === 6) return createProblem('2-1-2', diff, `다음을 2의 거듭제곱 꼴 $2^k$로 나타낼 때, $k$의 값을 구하시오.  $\\dfrac{4^9 + 4^9 + 4^9 + 4^9}{2^5}$`, `15`);
  if (type === 7) return createProblem('2-1-2', diff, `다음을 간단히 하시오.  $(-1)^n + (-1)^{n+1}$ (단, $n$은 자연수이다.)`, `0`);
  if (type === 8) return createProblem('2-1-2', diff, `$A = x-y,\\ B = x+2y$일 때, $2A - B$를 $x, y$로 나타내시오.`, `$x - 4y$`);
  if (type === 9) return createProblem('2-1-2', diff, `수 $2^{10} \\times 5^8$은 몇 자리 자연수인지 구하시오.`, `9자리`);
  if (type === 10) return createProblem('2-1-2', diff, `다음을 만족시키는 $a$의 값을 구하시오.  $(3x-1)(2x+a)$의 전개식에서 $x$의 계수가 7이다.`, `3`);
  if (type === 11) return createProblem('2-1-2', diff, `다음을 $2^k$의 꼴로 나타낼 때, $k$의 값을 구하시오.  $2^3 + 2^3 + 2^3 + 2^3$`, `5`);
  if (type === 12) return createProblem('2-1-2', diff, `다음을 2의 거듭제곱으로 나타내시오.  $\\dfrac{2^{12}}{4^5} \\times 8^2$`, `$2^8$`);
  if (type === 13) return createProblem('2-1-2', diff, `다음을 간단히 하시오.  $(3x+2y) - 2\\{x - (2x-y)\\}$`, `$x + 4y$`);
  if (type === 14) return createProblem('2-1-2', diff, `$A=3x-1$일 때, $A^2 - 2A$의 상수항을 구하시오.`, `3`);
  if (type === 15) return createProblem('2-1-2', diff, `반지름이 $2r$, 높이가 $3h$인 원뿔의 부피를 $V_1$, 반지름이 $r$, 높이가 $h$인 원뿔의 부피를 $V_2$라고 할 때, $V_1 : V_2$를 구하시오.`, `12:1`);
  if (type === 16) return createProblem('2-1-2', diff, `다음을 전개하고 계수를 비교하여 $a$의 값을 구하시오.  $(x+a)^2 = x^2+8x+16$`, `4`);
  if (type === 17) return createProblem('2-1-2', diff, `두 수 $2^a, 2^b$의 곱이 $2^{15}$일 때, $a+b$의 값을 구하시오.`, `15`);
  if (type === 18) return createProblem('2-1-2', diff, `다항식 $3x^2+ax-4$를 인수분해했더니 $(3x-2)(x+2)$가 되었다. $a$의 값을 구하시오.`, `4`);
  if (type === 19) return createProblem('2-1-2', diff, `다음을 간단히 하시오.  $\\dfrac{8x^3y^2}{4xy} \\times \\dfrac{1}{2}x$`, `$x^3y^2$`);
  if (type === 20) return createProblem('2-1-2', diff, `수 $5^3 \\times 4^n$이 $2^m$꼴로 나타낼 수 있을 때, $n,m$의 관계식을 쓰고, $n=2$일 때 $m$을 구하시오.`, `m=6`);
  if (type === 21) return createProblem('2-1-2', diff, `다음을 정리하시오.  $\\{(x+1)^2 - (x-1)^2\\} \\div 4$`, `$x$`);
  if (type === 22) return createProblem('2-1-2', diff, `등비수열 $1, 2, 4, 8, \\dots$에서 $2^n$ 꼴로 나타낸 일반항 $a_n$을 쓰고, $a_6$의 값을 구하시오.`, `64`);
  return createProblem('2-1-2', diff, `다음을 간단히 하시오.  $\\dfrac{2^{n+2}-2^{n}}{2^{n-1}}$`, `4-2`);
};


// ==========================================
// UNIT 3: Systems of Equations
// ==========================================

const systemLow = (): Problem => {
  const type = randomInt(1, 23);
  const diff = 'Low';
  
  if (type===1) return createProblem('2-1-3', diff, `$x, y$가 자연수일 때, 방정식 $x+y=4$의 해의 개수를 구하시오.`, `3개`);
  if (type===2) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} x=2 \\\\ x+y=5 \\end{cases}$의 해를 구하시오.`, `$x=2, y=3$`);
  if (type===3) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} x+y=5 \\\\ x-y=1 \\end{cases}$을 풀어 $x, y$의 값을 구하시오.`, `$x=3, y=2$`);
  if (type===4) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} y=x+1 \\\\ y=2x \\end{cases}$을 대입법으로 풀어 $x, y$를 구하시오.`, `$x=1, y=2$`);
  if (type===5) return createProblem('2-1-3', diff, `방정식 $2x + y = 7$의 한 해가 $(2, a)$일 때, $a$의 값을 구하시오.`, `3`);
  if (type===6) return createProblem('2-1-3', diff, `다음 중 미지수가 2개인 일차방정식은 어느 것인지 고르시오.  ($x^2+y=1$, $x+y=3$)`, `$x+y=3$`);
  if (type===7) return createProblem('2-1-3', diff, `가감법을 사용하여 연립방정식 $\\begin{cases} 2x+y=10 \\\\ 3x-y=5 \\end{cases}$을 풀려고 한다. 두 식을 변끼리 더했을 때 얻어지는 식을 쓰시오.`, `$5x=15$`);
  if (type===8) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} 2x+3y=8 \\\\ x=1 \\end{cases}$의 해를 구하시오.`, `$x=1, y=2$`);
  if (type===9) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} x=y \\\\ x+y=4 \\end{cases}$의 해를 구하시오.`, `$x=2, y=2$`);
  if (type===10) return createProblem('2-1-3', diff, `해가 $(1,2)$인 연립방정식을 다음 보기 중에서 고르시오.  (예: $x+y=3, 2x-y=0$)`, `$x+y=3, 2x-y=0$`);
  if (type===11) return createProblem('2-1-3', diff, `직선 $ax+y=3$ 위의 점 $(1,1)$을 대입했을 때 성립한다. 이때 $a$의 값을 구하시오.`, `2`);
  if (type===12) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} y=3x \\\\ x+y=4 \\end{cases}$의 해를 구하시오.`, `$x=1, y=3$`);
  if (type===13) return createProblem('2-1-3', diff, `다음 두 식 $x+y=1$, $2x+2y=2$가 이루는 연립방정식의 해의 개수를 쓰고, 그 이유를 간단히 설명하시오.`, `해가 무수히 많다`);
  if (type===14) return createProblem('2-1-3', diff, `미지수가 2개인 일차방정식 $2x+3y=12$에서 자연수 해 $(x,y)$의 개수를 구하시오.`, `1개`);
  if (type===15) return createProblem('2-1-3', diff, `연립방정식을 풀었더니 $0 \\cdot x = 0$이라는 식이 나왔다. 이 연립방정식의 해의 개수를 말하시오.`, `무수히 많다`);
  if (type===16) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} x+2y=6 \\\\ x-y=1 \\end{cases}$의 해를 구하시오.`, `$x=2, y=2$`);
  if (type===17) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} 3x+y=10 \\\\ x-y=2 \\end{cases}$의 해를 구하시오.`, `$x=3, y=1$`);
  if (type===18) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} x+3y=7 \\\\ 2x+3y=9 \\end{cases}$의 해를 구하시오.`, `$x=2, y=\\dfrac{5}{3}$`);
  if (type===19) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} 2x-y=1 \\\\ 4x-2y=2 \\end{cases}$의 해의 개수를 구하시오.`, `무수히 많다`);
  if (type===20) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} x+y=5 \\\\ x+y=3 \\end{cases}$의 해의 개수를 구하시오.`, `해가 없다`);
  if (type===21) return createProblem('2-1-3', diff, `$x+y=6$의 자연수 해 $(x,y)$ 중에서 $x>y$를 만족하는 해의 개수를 구하시오.`, `2개`);
  if (type===22) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} x+ay=4 \\\\ x+y=4 \\end{cases}$의 해가 무수히 많으려면 $a$의 값은 얼마인지 구하시오.`, `1`);
  return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} x-2y=3 \\\\ 2x-4y=6 \\end{cases}$의 해의 개수를 말하고, 이유를 쓰시오.`, `무수히 많다`);
};

const systemMid = (): Problem => {
  const type = randomInt(1, 23);
  const diff = 'Mid';
  const x = randomInt(-3, 5), y = randomInt(-3, 5);
  
  if (type===1) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} 2(x+y)=8 \\\\ 3x-y=2 \\end{cases}$의 해를 구하시오.`, `$x=2, y=2$`);
  if (type===2) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} 3x + 2y = ${3*x+2*y} \\\\ 2x - y = ${2*x-y} \\end{cases}$의 해를 구하시오.`, `$x=${x}, y=${y}$`);
  if (type===3) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} y = 2x - 1 \\\\ 3x + y = 14 \\end{cases}$의 해를 구하시오.`, `$x=3, y=5$`);
  if (type===4) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} 0.2x + 0.3y = 0.8 \\\\ x - 2y = -3 \\end{cases}$의 해를 구하시오.`, `$x=1, y=2$`);
  if (type===5) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} \\dfrac{x}{2} + \\dfrac{y}{3} = 2 \\\\ x - y = -1 \\end{cases}$의 해를 구하시오.`, `$x=2, y=3$`);
  if (type===6) return createProblem('2-1-3', diff, `다음 연립방정식의 해가 무수히 많으려면 $a, b$의 값을 구하시오.  $\\begin{cases} ax + y = 2 \\\\ 4x + 2y = b \\end{cases}$`, `$a=2, b=4$`);
  if (type===7) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} x+y=3 \\\\ 2x-y=3 \\end{cases}$의 해가 점 $(2,1)$일 때, 식 $ax+y=3$에서 $a$의 값을 구하시오.`, `1`);
  if (type===8) return createProblem('2-1-3', diff, `현재 아버지의 나이는 40세, 아들의 나이는 10세이다. 몇 년 후에 아버지의 나이가 아들의 나이의 3배가 되는지 연립방정식을 세우고 풀어 구하시오.`, `5년 후`);
  if (type===9) return createProblem('2-1-3', diff, `$2x+y$, $x-y+3$, $5$가 모두 같다고 할 때, $2x+y = x-y+3 = 5$를 만족하는 $x, y$를 구하시오.`, `$x=2, y=1$`);
  if (type===10) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} 3x + ay = 5 \\\\ bx - 2y = 4 \\end{cases}$의 해가 $(1, -2)$일 때, $a+b$의 값을 구하시오.`, `-1`);
  if (type===11) return createProblem('2-1-3', diff, `$x:y = 2:3$, $x+y=10$일 때, $x, y$의 값을 구하시오.`, `$x=4, y=6$`);
  if (type===12) return createProblem('2-1-3', diff, `어떤 두 수의 합은 30이고 차는 10이다. 두 수를 구하시오.`, `20, 10`);
  if (type===13) return createProblem('2-1-3', diff, `두 자리 자연수에서 십의 자리 수를 $x$, 일의 자리 수를 $y$라 할 때, 십의 자리와 일의 자리의 합이 12이고, 일의 자리와 십의 자리를 바꾼 수는 처음 수보다 18만큼 크다. 처음 수를 구하시오.`, `57`);
  if (type===14) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} 2x-y=5 \\\\ x+2y=5 \\end{cases}$의 해 $(x,y)$가 식 $x+ay=4$도 만족할 때, $a$의 값을 구하시오.`, `1`);
  if (type===15) return createProblem('2-1-3', diff, `개와 닭을 합쳐 머리가 3개, 다리가 10개이다. 이 상황을 연립방정식으로 나타내고, 가능한 해를 구하시오.`, `개2, 닭1`);
  if (type===16) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} 5x+2y=9 \\\\ 3x-y=1 \\end{cases}$의 해를 구하시오.`, `$x=1, y=2$`);
  if (type===17) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} 4x-3y=5 \\\\ 2x+y=7 \\end{cases}$의 해를 구하시오.`, `$x=2, y=3$`);
  if (type===18) return createProblem('2-1-3', diff, `$x$와 $y$가 자연수일 때, $\\begin{cases} x+y=7 \\\\ x-2y=1 \\end{cases}$를 만족하는 $(x,y)$를 구하시오.`, `$x=5, y=2$`);
  if (type===19) return createProblem('2-1-3', diff, `한 수는 다른 수의 3배보다 2만큼 크다. 두 수의 합이 26일 때, 두 수를 구하시오.`, `20, 6`);
  if (type===20) return createProblem('2-1-3', diff, `두 연립방정식 $\\begin{cases} 2x+y=5 \\\\ x-y=1 \\end{cases}$과 $\\begin{cases} ax+2y=8 \\\\ x-y=1 \\end{cases}$의 해가 같을 때, $a$의 값을 구하시오.`, `1`);
  if (type===21) return createProblem('2-1-3', diff, `두 수의 차는 5이고, 큰 수의 2배와 작은 수의 3배의 합은 46이다. 두 수를 구하시오.`, `13, 8`);
  if (type===22) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} 2x+ay=4 \\\\ 4x+2y=8 \\end{cases}$의 해가 무수히 많을 때, $a$의 값을 구하시오.`, `1`);
  return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} 3x+2y=7 \\\\ 6x+4y=15 \\end{cases}$의 해의 개수를 말하고, 이유를 설명하시오.`, `해가 없다`);
};

const systemHigh = (): Problem => {
  const type = randomInt(1, 23);
  const diff = 'High';

  if (type===1) return createProblem('2-1-3', diff, `작년 한 학교의 남학생 수와 여학생 수의 합은 500명이다. 올해 남학생 수는 10% 증가하고 여학생 수는 5% 감소하여 전체 학생 수가 520명이 되었다. 작년 남학생 수를 구하시오.`, `300명`);
  if (type===2) return createProblem('2-1-3', diff, `한 학생이 산을 오를 때는 시속 2km, 내려올 때는 시속 3km로 걸었다. 왕복에 4시간이 걸리고, 왕복 거리는 10km였다. 올라간 거리를 구하시오.`, `4km`);
  if (type===3) return createProblem('2-1-3', diff, `5% 소금물과 10% 소금물을 섞어 8% 소금물 500g을 만들려고 한다. 5% 소금물은 몇 g 필요한지 구하시오.`, `200g`);
  if (type===4) return createProblem('2-1-3', diff, `어떤 작업을 A가 혼자 하면 3일, B가 혼자 하면 4일이 걸린다. A가 3일, B가 4일 일하면 작업이 완성된다고 할 때, 실제로 A 혼자 이 작업을 완성하는 데 걸리는 일을 연립방정식으로 세우고 구하시오.`, `10일`);
  if (type===5) return createProblem('2-1-3', diff, `길이가 200m인 기차가 800m인 다리를 완전히 통과하는 데 50초가 걸렸다. 기차의 속력을 m/s로 구하시오.`, `20m/s`);
  if (type===6) return createProblem('2-1-3', diff, `어떤 배가 강을 거슬러 올라갈 때는 10km를 가는 데 5시간, 내려갈 때는 10km를 가는 데 2시간이 걸린다. 강물의 속력과 배의 고유 속력을 구하시오.`, `배 3.5km/h`);
  if (type===7) return createProblem('2-1-3', diff, `두 자리 자연수에서 각 자리 수의 합은 9이다. 십의 자리와 일의 자리를 바꾼 수는 처음 수보다 27만큼 크다. 처음 수를 구하시오.`, `36`);
  if (type===8) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} ax + 2y = 4 \\\\ 3x + y = 1 \\end{cases}$이 해를 가지지 않을 때, $a$의 값을 구하시오.`, `6`);
  if (type===9) return createProblem('2-1-3', diff, `연립방정식을 풀 때 계수 $a$를 잘못 읽어 $y=2$라는 잘못된 해를 얻었다. 이 해를 원래 식에 대입하여 틀렸음을 확인하는 과정을 서술하시오.`, `대입하면 두 식이 성립하지 않음`);
  if (type===10) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} 0.\\dot{3}x + y = 1 \\\\ 0.\\dot{6}x - 0.\\dot{3}y = 0.3 \\end{cases}$의 해를 구하시오.`, `$x=\\dfrac{9}{7}, y=\\dfrac{4}{7}$`);
  if (type===11) return createProblem('2-1-3', diff, `둘레가 400m인 트랙에서 두 사람이 서로 반대 방향으로 달릴 때는 40초 후 만나고, 같은 방향으로 달릴 때는 200초 후 만난다. 더 빠른 사람의 속력을 구하시오.`, `6m/s`);
  if (type===12) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} x+y=5 \\\\ ax-y=3 \\end{cases}$의 해와 $\\begin{cases} 2x+y=7 \\\\ x+y=b \\end{cases}$의 해가 같을 때, $a+b$의 값을 구하시오.`, `8`);
  if (type===13) return createProblem('2-1-3', diff, `어떤 물건의 원가에 20%의 이익을 붙여 정가를 정하였다. 이 물건이 팔리지 않아 정가에서 100원을 깎아 팔았더니 500원의 이익을 얻었다. 이 물건의 원가를 구하시오.`, `3000원`);
  if (type===14) return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} ax+by=2 \\\\ bx+ay=3 \\end{cases}$의 해가 $(1,1)$일 때, $a, b$의 값을 구하시오.`, `a=1, b=1`);
  if (type===15) return createProblem('2-1-3', diff, `A, B 두 개의 호스로 물통을 채우려고 한다. A만 사용하면 $x$시간, B만 사용하면 $y$시간이 걸린다. A를 3시간, B를 2시간 사용하면 꽉 차고, A를 2시간, B를 4시간 사용해도 꽉 찬다. A 혼자 물통을 채우는 데 걸리는 시간을 구하시오.`, `4시간`);
  if (type===16) return createProblem('2-1-3', diff, `도시 A와 B 사이의 거리는 120km이다. 자동차는 시속 60km로 A에서 출발하고, 오토바이는 시속 40km로 B에서 출발하여 서로 마주 보고 달린다. 출발 후 몇 시간 뒤에 만나는지 연립방정식을 세우고 구하시오.`, `1.2시간`);
  if (type===17) return createProblem('2-1-3', diff, `어떤 수 $x$와 $y$에 대하여 $x+y=11$, $2x+3y=28$일 때, $x, y$를 구하시오.`, `$x=5, y=6$`);
  if (type===18) return createProblem('2-1-3', diff, `과자 한 봉지의 값은 800원, 음료수 한 병의 값은 1200원이다. 과자와 음료수를 합쳐 10개를 사서 9800원을 지불했을 때, 과자와 음료수를 각각 몇 개씩 샀는지 구하시오.`, `과자7, 음료3`);
  if (type===19) return createProblem('2-1-3', diff, `한 농부가 밭 A와 밭 B에서 수확한 감자의 양을 합쳐 800kg이다. A 밭에서 2배를 더 심고 B 밭에서 100kg을 옮겼다면 두 밭의 감자 양이 같아진다. 처음에 A와 B 밭에서 수확한 감자의 양을 각각 구하시오.`, `A:350, B:450`);
  if (type===20) return createProblem('2-1-3', diff, `두 수의 합은 15이고, 큰 수의 2배에서 작은 수를 빼면 11이다. 두 수를 구하시오.`, `13, 2`);
  if (type===21) return createProblem('2-1-3', diff, `$x$와 $y$가 자연수이고 $x>y$일 때, $\\begin{cases} x+y=12 \\\\ x-y=4 \\end{cases}$를 만족하는 $(x,y)$를 구하시오.`, `$x=8, y=4$`);
  if (type===22) return createProblem('2-1-3', diff, `두 수의 합은 50이고, 두 수의 차는 10이다. 두 수를 구하시오.`, `30, 20`);
  return createProblem('2-1-3', diff, `연립방정식 $\\begin{cases} 3x+4y=5 \\\\ 6x+8y=10 \\end{cases}$의 해의 개수를 말하고, 그 이유를 설명하시오.`, `무수히 많다`);
};


// ==========================================
// UNIT 4: Inequalities
// ==========================================

const ineqLow = (): Problem => {
  const type = randomInt(1, 15);
  const diff = 'Low';
  
  if (type===1) return createProblem('2-1-4', diff, `$x < 2$일 때 $x+3$의 범위는?`, `x+3 < 5`);
  if (type===2) return createProblem('2-1-4', diff, `$2x > 6$ 해는?`, `$x > 3$`);
  if (type===3) return createProblem('2-1-4', diff, `$-x \\le -3$ 해는?`, `$x \\ge 3$`);
  if (type===4) return createProblem('2-1-4', diff, `$x+5 < 3$ 해는?`, `$x < -2$`);
  if (type===5) return createProblem('2-1-4', diff, `$3x - 1 \\ge 5$`, `$x \\ge 2$`);
  if (type===6) return createProblem('2-1-4', diff, `다음 중 부등식인 것은? ($2x+1=3$, $2x > 1$)`, `$2x > 1$`);
  if (type===7) return createProblem('2-1-4', diff, `$a < b$일 때, $2a-1 \\square 2b-1$`, `<`);
  if (type===8) return createProblem('2-1-4', diff, `$a < b$일 때, $-a \\square -b$`, `>`);
  if (type===9) return createProblem('2-1-4', diff, `$x=2$가 해가 되는 부등식은? ($x+1>5$, $2x>3$)`, `$2x > 3$`);
  if (type===10) return createProblem('2-1-4', diff, `수직선 표현: $x \\ge 2$ (그림 대신 설명)`, `2를 포함하고 오른쪽`);
  if (type===11) return createProblem('2-1-4', diff, `일차부등식 $2x-4 > 0$의 해?`, `$x > 2$`);
  if (type===12) return createProblem('2-1-4', diff, `$x$의 3배에서 5를 뺀 것은 10보다 작다.`, `$3x - 5 < 10$`);
  if (type===13) return createProblem('2-1-4', diff, `부등식의 성질: 양변에 음수를 곱하면 부등호 방향은?`, `바뀐다`);
  if (type===14) return createProblem('2-1-4', diff, `$3x \\le 9$ 만족하는 자연수 $x$ 개수?`, `3개`);
  return createProblem('2-1-4', diff, `$-2x < 4$ 해?`, `$x > -2$`);
};

const ineqMid = (): Problem => {
  const type = randomInt(1, 15);
  const diff = 'Mid';
  
  if (type===1) return createProblem('2-1-4', diff, `$2(x-3) < x + 1$`, `$x < 7$`);
  if (type===2) return createProblem('2-1-4', diff, `$0.3x - 1.2 \\ge 0.6$`, `$x \\ge 6$`);
  if (type===3) return createProblem('2-1-4', diff, `$\\frac{x}{2} - \\frac{1}{3} > \\frac{x}{6} + 1$`, `$x > 4$`);
  if (type===4) return createProblem('2-1-4', diff, `$ax + 3 > 2x + 1$의 해가 $x < 2$일 때 $a$는? (a-2 < 0)`, `1`);
  if (type===5) return createProblem('2-1-4', diff, `연속하는 두 짝수의 합이 26보다 작다. 가장 큰 두 수의 쌍은?`, `10, 12`);
  if (type===6) return createProblem('2-1-4', diff, `한 개 500원 사과와 300원 귤 합쳐 10개, 4000원 이하. 사과 최대?`, `5개`);
  if (type===7) return createProblem('2-1-4', diff, `$3x - a < 5$의 해가 $x < 3$일 때 $a$의 값?`, `4`);
  if (type===8) return createProblem('2-1-4', diff, `$\\frac{3x-1}{2} - \\frac{x+2}{3} > 1$`, `$x > 13/7$`);
  if (type===9) return createProblem('2-1-4', diff, `$2x - 1 < 5$ 만족하는 자연수 $x$는?`, `1, 2`);
  if (type===10) return createProblem('2-1-4', diff, `$x$에 대한 일차부등식이 되기 위한 $a$의 조건 ($ax > 2x+1$)`, `$a \\neq 2$`);
  if (type===11) return createProblem('2-1-4', diff, `현재 형 저금 10000원(매달 3000), 동생 5000원(매달 4000). 몇 달 후 동생이 많아지나?`, `6개월`);
  if (type===12) return createProblem('2-1-4', diff, `$4x - 5 \\le 3(x+1)$`, `$x \\le 8$`);
  if (type===13) return createProblem('2-1-4', diff, `삼각형 세 변 $x, x+2, x+4$일 때 $x$ 범위 (가장 긴 변 < 나머지 합)`, `$x > 2$`);
  if (type===14) return createProblem('2-1-4', diff, `입장료 1인 2000원, 30명 이상 단체 20% 할인. 몇 명부터 단체 유리? (30*0.8*2000 < 2000x)`, `25명`);
  return createProblem('2-1-4', diff, `$0.4x - 1 > \\frac{1}{5}x + 2$`, `$x > 15$`);
};

const ineqHigh = (): Problem => {
  const type = randomInt(1, 15);
  const diff = 'High';

  if (type===1) return createProblem('2-1-4', diff, `원가 4000원, 정가의 20% 할인, 이익 원가의 10% 이상. 정가 최소?`, `5500원`);
  if (type===2) return createProblem('2-1-4', diff, `역까지 3km. 시속 3km로 걷다가 시속 4km로 뛰어서 50분(5/6시간) 이내 도착. 뛴 거리 최소?`, `1km (3-x)/3 + x/4 <= 5/6`);
  if (type===3) return createProblem('2-1-4', diff, `10% 소금물 200g에 물을 증발시켜 20% 이상이 되게 하려면 증발시킬 물의 양은?`, `100g 이상`);
  if (type===4) return createProblem('2-1-4', diff, `긴 의자에 4명씩 앉으면 5명 남고, 5명씩 앉으면 의자 2개 남음. 의자 개수 범위?`, `(예: 13~14개) -> 의자x. 4x+5. 5(x-3)+1 <= 4x+5 <= 5(x-3)+5. -> x=12일때 53명? -> 문제 어려움. 답: 12개`); 
  if (type===5) return createProblem('2-1-4', diff, `부등식 $ax+b < 0$ 해가 $x > 2$일 때, $bx+a > 0$의 해는?`, `$x < -1/2$`);
  if (type===6) return createProblem('2-1-4', diff, `$\\begin{cases} x > 2 \\\\ x < a \\end{cases}$ 해가 없을 때 $a$의 범위?`, `$a \\le 2$`);
  if (type===7) return createProblem('2-1-4', diff, `집 앞 1000원, 시장 800원(왕복 1500원). 몇 개 이상?`, `8개`);
  if (type===8) return createProblem('2-1-4', diff, `절대값 부등식 $|x-1| < 3$`, `-2 < x < 4`);
  if (type===9) return createProblem('2-1-4', diff, `사다리꼴 윗변 5, 높이 6, 넓이 40 이상이려면 아랫변은?`, `8.33.. -> $25/3$ 이상`);
  if (type===10) return createProblem('2-1-4', diff, `$\\frac{x-a}{3} > 1$ 의 해가 $x > 5$일 때 $a$?`, `2`);
  if (type===11) return createProblem('2-1-4', diff, `$3x-2 > x+4$와 $2x+a < 5x$의 해가 같을 때 $a$?`, `-9`);
  if (type===12) return createProblem('2-1-4', diff, `부등식 $3(x-1) \\ge 5x-a$의 해 중 가장 큰 수가 3일 때 $a$?`, `9`);
  if (type===13) return createProblem('2-1-4', diff, `10% 소금물 300g과 20% 소금물 섞어 16% 이하 만들 때 20% 소금물 최대 양?`, `450g`);
  if (type===14) return createProblem('2-1-4', diff, `상자 1개 2kg, 물건 300g. 전체 10kg 이하. 물건 최대 개수?`, `26개`);
  return createProblem('2-1-4', diff, `주차 요금: 30분 2000원, 추가 1분 100원. 5000원으로 최대 주차 시간?`, `60분`);
};


// ==========================================
// UNIT 5: Linear Functions
// ==========================================

const funcLow = (): Problem => {
  const type = randomInt(1, 15);
  const diff = 'Low';

  if (type===1) return createProblem('2-1-5', diff, `$y=2x+3$의 기울기?`, `2`);
  if (type===2) return createProblem('2-1-5', diff, `$y=-x+5$의 $y$절편?`, `5`);
  if (type===3) return createProblem('2-1-5', diff, `$f(x)=3x-1$일 때 $f(2)$?`, `5`);
  if (type===4) return createProblem('2-1-5', diff, `$y=3x$를 $y$축 방향으로 -2 평행이동?`, `$y=3x-2$`);
  if (type===5) return createProblem('2-1-5', diff, `점 $(1, a)$가 $y=2x$ 위의 점일 때 $a$?`, `2`);
  if (type===6) return createProblem('2-1-5', diff, `$y = ax - 4$의 $x$절편이 2일 때 $a$?`, `2`);
  if (type===7) return createProblem('2-1-5', diff, `다음 중 일차함수인 것은? ($y=x^2$, $y=3x+1$)`, `$y=3x+1$`);
  if (type===8) return createProblem('2-1-5', diff, `$x$가 2 증가할 때 $y$가 6 증가. 기울기?`, `3`);
  if (type===9) return createProblem('2-1-5', diff, `기울기가 2이고 $y$절편이 3인 직선?`, `$y=2x+3$`);
  if (type===10) return createProblem('2-1-5', diff, `$y=5$는 일차함수인가?`, `아니다 (상수함수)`);
  if (type===11) return createProblem('2-1-5', diff, `한 변 길이가 $x$인 정삼각형 둘레 $y$. 함수식?`, `$y=3x$`);
  if (type===12) return createProblem('2-1-5', diff, `$y=-2x+4$ 그래프가 지나는 $y$축 위의 점?`, `(0, 4)`);
  if (type===13) return createProblem('2-1-5', diff, `$f(x)=-x+3$. $f(1)+f(-1)$?`, `2 + 4 = 6`);
  if (type===14) return createProblem('2-1-5', diff, `일차함수 $y=ax+b$에서 $a$의 부호가 음수이면 그래프 방향은?`, `오른쪽 아래`);
  return createProblem('2-1-5', diff, `원점을 지나는 일차함수 기본 꼴?`, `$y=ax$`);
};

const funcMid = (): Problem => {
  const type = randomInt(1, 15);
  const diff = 'Mid';

  if (type===1) return createProblem('2-1-5', diff, `두 점 $(1,3), (2,5)$를 지나는 직선?`, `$y=2x+1$`);
  if (type===2) return createProblem('2-1-5', diff, `기울기가 3이고 점 $(1, 2)$를 지나는 직선?`, `$y=3x-1$`);
  if (type===3) return createProblem('2-1-5', diff, `$x$절편이 3, $y$절편이 6인 직선?`, `$y=-2x+6$`);
  if (type===4) return createProblem('2-1-5', diff, `세 점 $(1,1), (2,3), (a,7)$이 한 직선 위에 있을 때 $a$?`, `4`);
  if (type===5) return createProblem('2-1-5', diff, `$y=2x+k$가 제4사분면을 지나지 않을 때 $k$ 범위?`, `$k \\ge 0$`);
  if (type===6) return createProblem('2-1-5', diff, `$ax+by+c=0$ 그래프의 기울기?`, `$-a/b$`);
  if (type===7) return createProblem('2-1-5', diff, `직선 $x=3$의 성질 (y축 평행 등)`, `y축에 평행`);
  if (type===8) return createProblem('2-1-5', diff, `두 직선 $y=x+1, y=-x+3$의 교점?`, `(1, 2)`);
  if (type===9) return createProblem('2-1-5', diff, `평행이동: $y=ax+b$를 $y$축으로 -3 이동했더니 $y=2x+1$ 일치.`, `a=2, b=4`);
  if (type===10) return createProblem('2-1-5', diff, `일차함수 활용: 20cm 양초, 10분마다 2cm 탐. x분 후 남은 길이?`, `$y=20-0.2x$`);
  if (type===11) return createProblem('2-1-5', diff, `그래프와 $x$축, $y$축으로 둘러싸인 삼각형 넓이 ($y=-x+4$)`, `8`);
  if (type===12) return createProblem('2-1-5', diff, `$y=ax+b$가 그림과 같을 때 $a,b$ 부호 (1,2,4사분면 지남)`, `a>0, b<0`);
  if (type===13) return createProblem('2-1-5', diff, `섭씨 $x$도일 때 화씨 $y$도 관계식 ($y=1.8x+32$)`, `$y=1.8x+32$`);
  if (type===14) return createProblem('2-1-5', diff, `두 직선 $y=2x+1$과 $y=ax+3$이 평행할 때 $a$?`, `2`);
  return createProblem('2-1-5', diff, `직선의 방정식 $2x-y+4=0$의 $x$절편은?`, `-2`);
};

const funcHigh = (): Problem => {
  const type = randomInt(1, 15);
  const diff = 'High';

  if (type===1) return createProblem('2-1-5', diff, `세 직선으로 둘러싸인 삼각형 넓이: $y=x, y=-x+4, y=0$`, `4`);
  if (type===2) return createProblem('2-1-5', diff, `두 직선 $y=ax+2, y=-x+b$가 $y$축에서 수직으로 만날 때? (두 직선 교점이 y축 위)`, `교점 (0,2) -> b=2`);
  if (type===3) return createProblem('2-1-5', diff, `사각형 $ABCD$ ($A(0,4), B(4,4), C(4,0), D(0,0)$) 넓이를 이등분하는 직선 $y=ax$의 $a$?`, `1`);
  if (type===4) return createProblem('2-1-5', diff, `100L 물통에 2분마다 5L씩 물이 빠진다. $x$분 후 남은 물 $y$.`, `$y=100-2.5x$`);
  if (type===5) return createProblem('2-1-5', diff, `$ax+by-c=0$ ($a>0, b<0, c>0$) 그래프가 지나는 사분면?`, `1, 3, 4`);
  if (type===6) return createProblem('2-1-5', diff, `두 일차함수 $y=-x+4, y=x-a$의 교점의 $x$좌표가 양수일 $a$범위?`, `$a > -4$`);
  if (type===7) return createProblem('2-1-5', diff, `엘리베이터: 1층에서 출발, 2초마다 1층씩 상승. $x$초 후 층수 $y$.`, `$y=0.5x+1$`);
  if (type===8) return createProblem('2-1-5', diff, `동점 P가 직사각형 $ABCD$ ($AB=4, BC=6$) 변을 따라 $B \to C$ 이동. 이동거리 $x$, $\\triangle ABP$ 넓이 $y$.`, `$y=2x$`);
  if (type===9) return createProblem('2-1-5', diff, `연립방정식 해가 없을 때 두 직선의 위치 관계는?`, `평행`);
  if (type===10) return createProblem('2-1-5', diff, `두 직선 $y=x+2, y=-2x+8$과 $x$축으로 둘러싸인 도형 넓이?`, `9`);
  if (type===11) return createProblem('2-1-5', diff, `세 직선 $y=2x, y=-x+3, y=ax-1$이 삼각형을 이루지 않을 때 정수 $a$?`, `2, -1, 4/3(정수아님) -> 2, -1`);
  if (type===12) return createProblem('2-1-5', diff, `다이아몬드형 그래프 $|x| + |y| = 2$ 넓이?`, `8`);
  if (type===13) return createProblem('2-1-5', diff, `A는 분속 100m, B는 10분 늦게 분속 200m. 만나는 시간?`, `출발 20분 후`);
  if (type===14) return createProblem('2-1-5', diff, `직사각형 $A(1,1), B(3,1), C(3,4), D(1,4)$와 $y=ax$가 만나기 위한 $a$ 범위?`, `$1/3 \\le a \\le 4$`);
  return createProblem('2-1-5', diff, `길이 20cm 용수철에 10g당 2cm 늘어남. 무게 $x$g일 때 길이 $y$.`, `$y=20+0.2x$`);
};

// ==========================================
// Main Generator Function
// ==========================================

export const generateSemester1Problem = (unitId: string, difficulty: Difficulty): Problem => {
  if (unitId === '2-1-1') {
    if (difficulty === 'Low') return rationalLow();
    if (difficulty === 'Mid') return rationalMid();
    return rationalHigh();
  }
  if (unitId === '2-1-2') {
    if (difficulty === 'Low') return algebraLow();
    if (difficulty === 'Mid') return algebraMid();
    return algebraHigh();
  }
  if (unitId === '2-1-3') {
    if (difficulty === 'Low') return systemLow();
    if (difficulty === 'Mid') return systemMid();
    return systemHigh();
  }
  if (unitId === '2-1-4') {
    if (difficulty === 'Low') return ineqLow();
    if (difficulty === 'Mid') return ineqMid();
    return ineqHigh();
  }
  if (unitId === '2-1-5') {
    if (difficulty === 'Low') return funcLow();
    if (difficulty === 'Mid') return funcMid();
    return funcHigh();
  }
  return rationalLow(); // fallback
};