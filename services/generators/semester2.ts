import { Problem, Difficulty } from '../../types';
import { randomInt, randomItem, generateId, formatFraction } from '../mathUtils';

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
// UNIT 1: Geometric Properties (도형의 성질)
// ==========================================

const shapeLow = (): Problem => {
  const diff = 'Low';
  const type = randomInt(1, 15);

  if (type === 1) { const v = randomInt(40, 80); return createProblem('2-2-1', diff, `이등변삼각형 $ABC$ ($AB=AC$)에서 $\\angle A = ${v}^\\circ$일 때, $\\angle B$의 크기는?`, `$${(180-v)/2}^\\circ$`); }
  if (type === 2) { const b = randomInt(30, 70); return createProblem('2-2-1', diff, `이등변삼각형 $ABC$ ($AB=AC$)에서 $\\angle B = ${b}^\\circ$일 때, $\\angle A$의 크기는?`, `$${180-2*b}^\\circ$`); }
  if (type === 3) return createProblem('2-2-1', diff, `직각삼각형의 빗변의 길이와 한 예각의 크기가 각각 같을 때, 두 삼각형은 합동이다. 이때 사용되는 합동 조건은?`, `RHA 합동`);
  if (type === 4) { const a = randomInt(50, 70); return createProblem('2-2-1', diff, `$\\triangle ABC$의 외심이 $O$이고 $\\angle A = ${a}^\\circ$일 때, $\\angle BOC$의 크기는?`, `$${2*a}^\\circ$`); }
  if (type === 5) { const a = randomInt(40, 80); return createProblem('2-2-1', diff, `$\\triangle ABC$의 내심이 $I$이고 $\\angle A = ${a}^\\circ$일 때, $\\angle BIC$의 크기는?`, `$${90 + a/2}^\\circ$`); }
  if (type === 6) { const a = randomInt(60, 120); return createProblem('2-2-1', diff, `평행사변형 $ABCD$에서 $\\angle A = ${a}^\\circ$일 때, 이웃하는 각 $\\angle B$의 크기는?`, `$${180-a}^\\circ$`); }
  if (type === 7) { const a = randomInt(3, 10); return createProblem('2-2-1', diff, `평행사변형 $ABCD$에서 $AB=${a}$cm일 때, 대변 $CD$의 길이는?`, `${a}cm`); }
  if (type === 8) { const d = randomInt(5, 15); return createProblem('2-2-1', diff, `직사각형의 한 대각선의 길이가 ${d}cm일 때, 다른 대각선의 길이는?`, `${d}cm`); }
  if (type === 9) return createProblem('2-2-1', diff, `마름모의 두 대각선이 서로 이루는 각의 크기는 몇 도인가?`, `$90^\\circ$`);
  if (type === 10) return createProblem('2-2-1', diff, `정사각형의 한 내각의 크기는?`, `$90^\\circ$`);
  if (type === 11) { const n = randomItem([5, 6, 8]); return createProblem('2-2-1', diff, `정${n}각형의 내각의 총합은?`, `$${180*(n-2)}^\\circ$`); }
  if (type === 12) { const n = randomItem([9, 10, 12]); return createProblem('2-2-1', diff, `정${n}각형의 한 외각의 크기는?`, `$${360/n}^\\circ$`); }
  if (type === 13) return createProblem('2-2-1', diff, `평행사변형이 마름모가 되기 위한 조건은? (두 글자)`, `이웃`); // Prompting key concept
  if (type === 14) return createProblem('2-2-1', diff, `직각삼각형의 합동 조건 중 '빗변(H)과 다른 한 변(S)'을 이용한 합동은?`, `RHS 합동`);
  return createProblem('2-2-1', diff, `삼각형의 세 내각의 이등분선의 교점은 무엇인가?`, `내심`);
};

const shapeMid = (): Problem => {
  const diff = 'Mid';
  const type = randomInt(1, 15);

  if (type === 1) { const angle = randomInt(20, 50); return createProblem('2-2-1', diff, `직사각형 모양의 종이를 접었다. 접힌 각도가 ${angle}^\\circ$일 때, 엇각의 성질을 이용하여 구한 겹친 부분의 삼각형은 어떤 삼각형인가?`, `이등변삼각형`); }
  if (type === 2) { const r = randomInt(3, 8); return createProblem('2-2-1', diff, `$\\triangle ABC$의 외심 $O$에서 꼭짓점 $A$까지의 거리가 ${r}cm이다. 이때 꼭짓점 $B$까지의 거리는?`, `${r}cm`); }
  if (type === 3) { const hyp = randomInt(6, 14) * 2; return createProblem('2-2-1', diff, `빗변의 길이가 ${hyp}cm인 직각삼각형의 외접원의 반지름 길이는?`, `${hyp/2}cm`); }
  if (type === 4) { const b = 30, c = 70; return createProblem('2-2-1', diff, `$\\triangle ABC$에서 $\\angle B=${b}^\\circ, \\angle C=${c}^\\circ$이다. 내심 $I$에 대하여 $\\angle IAC$의 크기는?`, `$${(180-b-c)/2}^\\circ$`); }
  if (type === 5) { const a = 5, b = 8; return createProblem('2-2-1', diff, `이웃하는 두 변의 길이가 각각 ${a}cm, ${b}cm인 평행사변형의 둘레의 길이는?`, `${2*(a+b)}cm`); }
  if (type === 6) { const d1 = 8, d2 = 6; return createProblem('2-2-1', diff, `두 대각선의 길이가 각각 ${d1}cm, ${d2}cm인 마름모의 넓이는?`, `${d1*d2/2}cm^2$`); }
  if (type === 7) { const u = 6, l = 10; return createProblem('2-2-1', diff, `윗변의 길이가 ${u}, 아랫변의 길이가 ${l}인 사다리꼴의 두 옆변의 중점을 연결한 선분의 길이는?`, `${(u+l)/2}`); }
  if (type === 8) { const dAngle = 30; return createProblem('2-2-1', diff, `직사각형의 대각선과 가로변이 이루는 각이 ${dAngle}^\\circ$일 때, 두 대각선 사이의 예각의 크기는?`, `$${2*dAngle}^\\circ$`); }
  if (type === 9) return createProblem('2-2-1', diff, `마름모가 정사각형이 되기 위한 조건으로, 한 내각이 $90^\\circ$가 되거나 무엇의 길이가 같아야 하는가?`, `대각선`);
  if (type === 10) return createProblem('2-2-1', diff, `직각삼각형의 빗변의 중점은 삼각형의 무엇과 일치하는가?`, `외심`);
  if (type === 11) { const angle = 120; return createProblem('2-2-1', diff, `외심 $O$에 대해 $\\angle BOC = ${angle}^\\circ$일 때, 호 $BC$에 대한 원주각 $\\angle A$의 크기는?`, `$${angle/2}^\\circ$`); }
  if (type === 12) return createProblem('2-2-1', diff, `평행사변형의 두 대각선은 서로를 어떻게 하는가?`, `이등분한다`);
  if (type === 13) { const a = 3, b = 4, c = 5; return createProblem('2-2-1', diff, `직각삼각형의 세 변의 길이가 3, 4, 5이다. 이 삼각형의 내접원의 반지름 $r$은?`, `1`); }
  if (type === 14) return createProblem('2-2-1', diff, `등변사다리꼴의 성질 중, 두 대각선의 길이는 어떠한가?`, `같다`);
  return createProblem('2-2-1', diff, `어떤 사각형의 각 변의 중점을 연결하면 마름모가 되는 사각형은?`, `직사각형`);
};

const shapeHigh = (): Problem => {
  const diff = 'High';
  const type = randomInt(1, 15);

  if (type === 1) return createProblem('2-2-1', diff, `$\\triangle ABC$의 내심 $I$를 지나고 $BC$에 평행한 직선이 $AB, AC$와 만나는 점을 $D, E$라 한다. $DB=6, EC=5$일 때, 선분 $DE$의 길이는?`, `11`);
  if (type === 2) { const a = 44; return createProblem('2-2-1', diff, `$\\triangle ABC$에서 $\\angle A = ${a}^\\circ$이다. 외심 $O$와 내심 $I$에 대하여 $\\angle BOC - \\angle BIC$의 값은?`, `$${2*a - (90+a/2)}^\\circ$`); }
  if (type === 3) return createProblem('2-2-1', diff, `등변사다리꼴 $ABCD$에서 $AD || BC$이고 $AB=AD=6, \\angle B=60^\\circ$이다. 이 사다리꼴의 둘레의 길이는?`, `30 (아랫변=12)`);
  if (type === 4) return createProblem('2-2-1', diff, `가로가 8, 세로가 6인 직사각형 $ABCD$의 대각선 $BD$를 접는 선으로 하여 접었다. 겹치는 부분($\\triangle PBD$)의 넓이는?`, `$\\frac{75}{4}$`); 
  if (type === 5) return createProblem('2-2-1', diff, `정사각형 $ABCD$ 내부에 정삼각형 $EBC$가 있다. $\\angle AED$의 크기는?`, `$150^\\circ$`);
  if (type === 6) return createProblem('2-2-1', diff, `평행사변형 $ABCD$에서 $\\angle A$의 이등분선이 $BC$와 만나는 점을 $E$라 하자. $AB=5, AD=8$일 때 $EC$의 길이는?`, `3`);
  if (type === 7) return createProblem('2-2-1', diff, `일반적인 사각형의 각 변의 중점을 연결하여 만든 사각형은 어떤 사각형인가?`, `평행사변형`);
  if (type === 8) return createProblem('2-2-1', diff, `직사각형 내부의 임의의 점 $P$에 대하여 $PA^2 + PC^2 = 20$일 때, $PB^2 + PD^2$의 값은?`, `20`);
  if (type === 9) return createProblem('2-2-1', diff, `삼각형 $ABC$의 무게중심 $G$에 대하여, $\\triangle GAB$의 넓이가 10일 때, $\\triangle ABC$의 전체 넓이는?`, `30`);
  if (type === 10) return createProblem('2-2-1', diff, `직각삼각형의 내접원 반지름이 2이고, 둘레의 길이가 24일 때, 이 삼각형의 넓이는?`, `24`);
  if (type === 11) return createProblem('2-2-1', diff, `정사각형 $ABCD$의 대각선 $AC$ 위의 점 $P$에 대하여 $\\angle ABP=25^\\circ$일 때, $\\angle ADP$의 크기는?`, `$25^\\circ$`);
  if (type === 12) return createProblem('2-2-1', diff, `삼각형의 내심과 외심이 일치하는 삼각형은 어떤 삼각형인가?`, `정삼각형`);
  if (type === 13) return createProblem('2-2-1', diff, `평행사변형 $ABCD$ 내부의 점 $P$에 대하여 $\\triangle PAB + \\triangle PCD = 20$일 때, 평행사변형 전체의 넓이는?`, `40`);
  if (type === 14) return createProblem('2-2-1', diff, `직각삼각형 $ABC$의 외심 $O$에 대하여 $OA+OB+OC=30$일 때, 빗변의 길이는?`, `20`);
  return createProblem('2-2-1', diff, `내각의 크기의 합이 $1800^\\circ$인 다각형은 몇 각형인가?`, `12각형`);
};

// ==========================================
// UNIT 2: Similarity (도형의 닮음)
// ==========================================

const simLow = (): Problem => {
  const diff = 'Low';
  const type = randomInt(1, 15);
  
  if (type===1) return createProblem('2-2-2', diff, `다음 중 삼각형의 닮음 조건이 아닌 것은? (SAS, SSS, AA, ASA)`, `ASA`);
  if (type===2) { const s = randomInt(2,5); return createProblem('2-2-2', diff, `두 닮은 도형의 닮음비가 $1:${s}$일 때, 넓이의 비는?`, `$1:${s*s}$`); }
  if (type===3) { const s = randomInt(2,4); return createProblem('2-2-2', diff, `두 입체도형의 닮음비가 $1:${s}$일 때, 부피의 비는?`, `$1:${s*s*s}$`); }
  if (type===4) return createProblem('2-2-2', diff, `$\\triangle ABC \\sim \\triangle DEF$이고 $AB=4, DE=8$이다. 두 삼각형의 닮음비는?`, `1:2`);
  if (type===5) return createProblem('2-2-2', diff, `축척이 1:50000인 지도에서 거리가 2cm인 두 지점 사이의 실제 거리는 몇 km인가?`, `1km`);
  if (type===6) return createProblem('2-2-2', diff, `삼각형의 무게중심 $G$는 중선을 꼭짓점으로부터 몇 대 몇으로 나누는가?`, `2:1`);
  if (type===7) return createProblem('2-2-2', diff, `삼각형의 두 변의 중점을 연결한 선분은 나머지 한 변과 평행하고, 그 길이는 나머지 변의 얼마인가?`, `1/2`);
  if (type===8) return createProblem('2-2-2', diff, `서로 닮은 두 평면도형에서 대응하는 각의 크기는 어떠한가?`, `같다`);
  if (type===9) return createProblem('2-2-2', diff, `직각삼각형의 직각인 꼭짓점에서 빗변에 수선을 내렸을 때, 생기는 서로 닮은 삼각형은 모두 몇 개인가?`, `3개`);
  if (type===10) return createProblem('2-2-2', diff, `항상 닮음인 도형을 고르시오. (정삼각형, 이등변삼각형, 직사각형)`, `정삼각형`);
  if (type===11) return createProblem('2-2-2', diff, `닮음비가 $2:3$인 두 원의 둘레의 길이의 비는?`, `2:3`);
  if (type===12) return createProblem('2-2-2', diff, `정육면체의 한 모서리의 길이가 2배가 되면 부피는 몇 배가 되는가?`, `8배`);
  if (type===13) return createProblem('2-2-2', diff, `$\\triangle ABC$에서 $AB, AC$의 중점을 각각 $D, E$라 하자. $BC=12$일 때 $DE$의 길이는?`, `6`);
  if (type===14) return createProblem('2-2-2', diff, `모든 원은 서로 닮음인가? (O/X)`, `O`);
  return createProblem('2-2-2', diff, `두 구의 겉넓이의 비가 $4:9$이다. 반지름의 길이의 비는?`, `$2:3$`);
};

const simMid = (): Problem => {
  const diff = 'Mid';
  const type = randomInt(1, 15);
  
  if (type===1) return createProblem('2-2-2', diff, `높이가 1m인 막대의 그림자가 1.5m일 때, 같은 시각 그림자의 길이가 6m인 나무의 높이는?`, `4m`);
  if (type===2) { const a = 10, b = 15; const h = (a*b)/(a+b); return createProblem('2-2-2', diff, `높이가 각각 ${a}m, ${b}m인 두 전봇대 사이에서, 밑부분과 꼭대기를 교차하여 연결한 줄이 만나는 지점의 높이는?`, `${h}m`); }
  if (type===3) return createProblem('2-2-2', diff, `$\\triangle ABC$에서 $\\angle A$의 이등분선이 $BC$와 만나는 점을 $D$라 하자. $AB=6, AC=4, BC=5$일 때 $BD$의 길이는?`, `3`);
  if (type===4) return createProblem('2-2-2', diff, `$\\triangle ABC$의 넓이가 36이다. 무게중심 $G$에 대하여 $\\triangle GBC$의 넓이는?`, `12`);
  if (type===5) return createProblem('2-2-2', diff, `$\\triangle ABC \\sim \\triangle DEF$이고 닮음비가 $2:3$이다. $\\triangle ABC$의 둘레가 10일 때 $\\triangle DEF$의 둘레는?`, `15`);
  if (type===6) { const u = 8, d = 14; return createProblem('2-2-2', diff, `사다리꼴의 윗변이 ${u}, 아랫변이 ${d}일 때, 두 변의 중점을 연결한 선분의 길이는?`, `11`); }
  if (type===7) { return createProblem('2-2-2', diff, `직각삼각형 $ABC(\\angle A=90^\\circ)$에서 수선 $AH$를 내렸다. $BH=4, HC=9$일 때 $AH^2$의 값은?`, `36`); }
  if (type===8) return createProblem('2-2-2', diff, `반지름의 길이가 3배인 큰 쇠구슬을 녹여 작은 쇠구슬을 만들 때, 최대 몇 개를 만들 수 있는가?`, `27개`);
  if (type===9) return createProblem('2-2-2', diff, `원뿔을 높이의 $1/2$ 지점에서 밑면에 평행하게 잘랐다. 위쪽 원뿔과 아래쪽 원뿔대의 부피의 비는?`, `1:7`);
  if (type===10) return createProblem('2-2-2', diff, `평행사변형 $ABCD$에서 대각선 $AC$는 다른 대각선 $BD$를 이등분한다. 이때 생기는 삼각형들의 무게중심은 대각선을 삼등분하는가? (O/X)`, `O`);
  if (type===11) return createProblem('2-2-2', diff, `삼각형의 외각의 이등분선 정리: $AB:AC = BD:CD$ (O/X)`, `O`);
  if (type===12) return createProblem('2-2-2', diff, `A4 용지와 A3 용지는 서로 닮음이다. 닮음비는? (긴 변 기준)`, `$1:\\sqrt{2}$`);
  if (type===13) return createProblem('2-2-2', diff, `원뿔 모양 그릇에 높이의 $2/3$만큼 물을 채웠다. 물의 부피는 그릇 전체 부피의 몇 분의 몇인가?`, `8/27`);
  if (type===14) return createProblem('2-2-2', diff, `직각삼각형의 닮음 공식 중 $c^2 = a \\times x$ (빗변의 일부) 꼴의 공식이 성립하는가?`, `O`);
  return createProblem('2-2-2', diff, `무게중심 $G$를 지나는 중선의 길이는 꼭짓점부터 무게중심까지 거리의 몇 배인가?`, `1.5배`);
};

const simHigh = (): Problem => {
  const diff = 'High';
  const type = randomInt(1, 15);

  if (type===1) return createProblem('2-2-2', diff, `평행사변형 $ABCD$의 넓이가 60이다. $BC$의 중점을 $M$, $CD$의 중점을 $N$이라 할 때, $\\triangle AMN$의 넓이는?`, `22.5`);
  if (type===2) return createProblem('2-2-2', diff, `직각삼각형 $ABC$의 무게중심을 $G$라 하자. 빗변 $BC=12$일 때, 꼭짓점 $A$에서 $G$까지의 거리 $AG$는?`, `4`);
  if (type===3) return createProblem('2-2-2', diff, `사다리꼴 $ABCD$ ($AD||BC$)에서 $AD=4, BC=6$이다. 두 대각선의 교점 $O$를 지나고 밑변에 평행한 선분이 옆변과 만나는 점을 $P, Q$라 할 때 $PQ$의 길이는?`, `4.8`);
  if (type===4) return createProblem('2-2-2', diff, `$\\triangle ABC$에서 $\\angle A$의 내각의 이등분선이 $BC$와 만나는 점 $D$. $AB=6, AC=4$이다. $\\triangle ABD$의 넓이가 9일 때 $\\triangle ADC$의 넓이는?`, `6`);
  if (type===5) return createProblem('2-2-2', diff, `축척 1:1000인 지도에서 넓이가 $20cm^2$인 땅의 실제 넓이는 몇 $m^2$인가?`, `2000m^2`);
  if (type===6) return createProblem('2-2-2', diff, `빈 물통에 물을 채우는데 높이의 $1/2$까지 채우는 데 10분이 걸렸다. 가득 채울 때까지 더 걸리는 시간은?`, `70분`);
  if (type===7) return createProblem('2-2-2', diff, `직각삼각형 $ABC$ ($AB=3, BC=4, \angle B=90$) 내부에 정사각형 $DBEF$가 내접한다 ($B$는 공통). 정사각형의 한 변의 길이는?`, `12/7`);
  if (type===8) return createProblem('2-2-2', diff, `키 1.6m인 사람이 가로등 밑에서 초속 1m로 걸어간다. 가로등 높이가 4.8m일 때, 그림자 끝이 움직이는 속력은?`, `1.5m/s`);
  if (type===9) return createProblem('2-2-2', diff, `정사면체를 각 모서리의 중점을 지나는 평면으로 잘라내어 만든 입체도형(팔면체)의 부피는 처음 정사면체 부피의 몇 분의 몇인가?`, `1/2`);
  if (type===10) return createProblem('2-2-2', diff, `$\\triangle ABC$의 무게중심 $G$를 지나고변 $BC$에 평행한 직선이 $AB, AC$와 만나는 점을 $D, E$라 하자. $\\triangle ADE$의 넓이가 4일 때 $\\triangle ABC$의 넓이는?`, `9`);
  if (type===11) return createProblem('2-2-2', diff, `정삼각형 $ABC$의 변 $BC$ 위에 $BD:DC=1:2$인 점 $D$가 있다. $\\angle ADE=60^\\circ$가 되도록 변 $AC$ 위에 점 $E$를 잡을 때, $AE:EC$의 비는?`, `4:5`); 
  if (type===12) return createProblem('2-2-2', diff, `사다리꼴의 두 대각선의 교점을 지나며 밑변에 평행한 직선의 길이 공식은? ($a$는 윗변, $b$는 아랫변)`, `$\\frac{2ab}{a+b}$`);
  if (type===13) return createProblem('2-2-2', diff, `$\\triangle ABC$에서 무게중심 $G$와 외심 $O$가 일치한다면 이 삼각형은?`, `정삼각형`);
  if (type===14) return createProblem('2-2-2', diff, `닮음비가 $m:n$인 두 원기둥의 겉넓이의 비는?`, `$m^2 : n^2$`);
  return createProblem('2-2-2', diff, `원뿔을 밑면에 평행하게 3등분(높이 기준) 했을 때, 가장 아래쪽 입체도형(원뿔대)의 부피는 전체 원뿔 부피의 몇 분의 몇인가?`, `19/27`);
};

// ==========================================
// UNIT 3: Pythagoras (피타고라스 정리)
// ==========================================

const pythLow = (): Problem => {
  const diff = 'Low';
  const type = randomInt(1, 15);

  const [a, b, c] = randomItem([[3,4,5], [6,8,10], [5,12,13]]);
  if (type===1) return createProblem('2-2-3', diff, `직각을 낀 두 변의 길이가 ${a}, ${b}인 직각삼각형의 빗변의 길이는?`, `${c}`);
  if (type===2) return createProblem('2-2-3', diff, `빗변의 길이가 ${c}이고 다른 한 변이 ${a}인 직각삼각형의 나머지 변의 길이는?`, `${b}`);
  if (type===3) return createProblem('2-2-3', diff, `가로가 ${a}, 세로가 ${b}인 직사각형의 대각선의 길이는?`, `${c}`);
  if (type===4) return createProblem('2-2-3', diff, `세 변의 길이가 3, 4, 5인 삼각형은 직각삼각형인가? (O/X)`, `O`);
  if (type===5) return createProblem('2-2-3', diff, `직각삼각형에서 빗변의 길이의 제곱은 나머지 두 변의 길이의 무엇과 같은가?`, `제곱의 합`);
  if (type===6) return createProblem('2-2-3', diff, `좌표평면 위의 원점과 점 $(3, 4)$ 사이의 거리는?`, `5`);
  if (type===7) return createProblem('2-2-3', diff, `한 변의 길이가 1인 정사각형의 대각선의 길이는?`, `$\\sqrt{2}$`);
  if (type===8) return createProblem('2-2-3', diff, `삼각형의 가장 긴 변의 제곱이 나머지 두 변의 제곱의 합보다 크면 어떤 삼각형인가?`, `둔각삼각형`);
  if (type===9) return createProblem('2-2-3', diff, `피타고라스 정리가 성립하는 삼각형은 어떤 삼각형인가?`, `직각삼각형`);
  if (type===10) return createProblem('2-2-3', diff, `세 변의 길이가 4, 5, 6인 삼각형은 예각, 직각, 둔각 중 무엇인가?`, `예각삼각형`);
  if (type===11) return createProblem('2-2-3', diff, `직각이등변삼각형의 세 변의 길이의 비는?`, `$1:1:\\sqrt{2}$`);
  if (type===12) return createProblem('2-2-3', diff, `세 변의 길이가 5, 12, 13일 때 직각과 마주보는 변(빗변)의 길이는?`, `13`);
  if (type===13) return createProblem('2-2-3', diff, `대각선의 길이가 10인 직사각형의 가로가 8일 때 세로의 길이는?`, `6`);
  if (type===14) return createProblem('2-2-3', diff, `원점 $(0,0)$과 점 $(a,b)$ 사이의 거리 공식은?`, `$\\sqrt{a^2+b^2}$`);
  return createProblem('2-2-3', diff, `피타고라스 정리는 어느 시대 수학자의 이름에서 유래했는가?`, `고대 그리스`);
};

const pythMid = (): Problem => {
  const diff = 'Mid';
  const type = randomInt(1, 15);
  
  if (type===1) { const s = 4; return createProblem('2-2-3', diff, `한 변의 길이가 ${s}인 정삼각형의 높이는?`, `$2\\sqrt{3}$`); }
  if (type===2) { return createProblem('2-2-3', diff, `세 변의 길이가 5, 5, 6인 이등변삼각형의 넓이는?`, `12`); }
  if (type===3) return createProblem('2-2-3', diff, `두 점 $(1,1)$과 $(4,5)$ 사이의 거리는?`, `5`);
  if (type===4) return createProblem('2-2-3', diff, `대각선의 길이가 $4\\sqrt{2}$인 정사각형의 한 변의 길이는?`, `4`);
  if (type===5) { return createProblem('2-2-3', diff, `가로 3, 세로 4, 높이 12인 직육면체의 대각선의 길이는?`, `13`); }
  if (type===6) { return createProblem('2-2-3', diff, `밑면의 반지름이 3이고 높이가 4인 원뿔의 모선 길이는?`, `5`); }
  if (type===7) return createProblem('2-2-3', diff, `가로 4, 세로 8인 직사각형을 대각선으로 접었다. 겹쳐진 삼각형은 이등변삼각형이다. 이 삼각형의 밑변의 길이는 대각선 길이와 같은가? (O/X)`, `X`);
  if (type===8) return createProblem('2-2-3', diff, `정삼각형의 한 변의 길이가 $a$일 때 넓이를 구하는 공식은?`, `$\\frac{\\sqrt{3}}{4}a^2$`);
  if (type===9) return createProblem('2-2-3', diff, `길이 10m인 사다리가 벽에 기대어 있다. 사다리 밑이 벽에서 6m 떨어져 있다면, 사다리가 닿은 높이는?`, `8m`);
  if (type===10) return createProblem('2-2-3', diff, `대각선이 서로 수직인 사각형에서 두 대변의 제곱의 합은 서로 같다. (O/X)`, `O`);
  if (type===11) return createProblem('2-2-3', diff, `한 모서리의 길이가 6인 정육면체의 대각선의 길이는?`, `$6\\sqrt{3}$`);
  if (type===12) return createProblem('2-2-3', diff, `세 변의 길이가 $x, x+1, x+2$인 직각삼각형에서 $x$의 값은?`, `3`);
  if (type===13) return createProblem('2-2-3', diff, `폭이 10인 직사각형 종이를 접어서 겹친 부분이 정삼각형이 되게 할 때, 한 변의 길이는?`, `$\\frac{20\\sqrt{3}}{3}$`);
  if (type===14) return createProblem('2-2-3', diff, `가로 6, 대각선 10인 직사각형의 넓이는?`, `48`);
  return createProblem('2-2-3', diff, `직육면체의 겉면을 따라가는 최단 거리를 구할 때 무엇을 이용하는가?`, `전개도`);
};

const pythHigh = (): Problem => {
  const diff = 'High';
  const type = randomInt(1, 15);

  if (type===1) return createProblem('2-2-3', diff, `밑면의 반지름이 3, 높이가 $4\\pi$인 원기둥이 있다. 밑면의 한 점 A에서 옆면을 따라 한 바퀴 감아 A 바로 위의 점 B까지 가는 최단 거리는?`, `$10\\pi$`);
  if (type===2) return createProblem('2-2-3', diff, `좌표평면 위의 두 점 $A(0, 1), B(4, 3)$과 $x$축 위의 점 $P$에 대하여 $AP+BP$의 최솟값은?`, `$4\\sqrt{2}$`);
  if (type===3) return createProblem('2-2-3', diff, `한 모서리의 길이가 6인 정사면체의 높이는?`, `$2\\sqrt{6}$`);
  if (type===4) return createProblem('2-2-3', diff, `세 변의 길이가 13, 13, 10인 이등변삼각형의 넓이는?`, `60`);
  if (type===5) return createProblem('2-2-3', diff, `두 원의 반지름이 3, 5이고 중심거리가 10일 때, 공통외접선의 길이는?`, `$\\sqrt{96}$`);
  if (type===6) return createProblem('2-2-3', diff, `삼각형 $ABC$의 세 변의 중선의 길이의 제곱의 합과 세 변의 길이의 제곱의 합 사이의 관계 (파푸스 중선 정리) 공식은?`, `$AB^2+AC^2=2(AM^2+BM^2)$`);
  if (type===7) return createProblem('2-2-3', diff, `유클리드의 방법으로 피타고라스 정리를 증명할 때, 직각에서 수선을 내린 양쪽 사각형의 넓이는 각각 무엇의 넓이와 같은가?`, `빗변의 제곱 정사각형을 나눈 직사각형`);
  if (type===8) return createProblem('2-2-3', diff, `가로, 세로, 높이가 3, 4, 5인 직육면체의 겉면을 따라 꼭짓점에서 대각선 반대편 꼭짓점까지 가는 최단 거리는?`, `$\\sqrt{74}$`);
  if (type===9) return createProblem('2-2-3', diff, `세 변의 길이가 $3, 4, a$인 삼각형이 둔각삼각형이 되기 위한 $a$의 범위는? (단, $a$가 가장 긴 변)`, `$5 < a < 7$`);
  if (type===10) return createProblem('2-2-3', diff, `정삼각형 내부의 한 점 $P$에서 세 변에 이르는 거리가 각각 1, 2, 3일 때, 이 정삼각형의 높이는?`, `6`);
  if (type===11) return createProblem('2-2-3', diff, `개미가 원기둥 컵의 바깥쪽 벽을 타고 반대편 가장자리까지 가는 최단 경로 문제에서 핵심은?`, `전개도에서 직선 거리`);
  if (type===12) return createProblem('2-2-3', diff, `밑면 반지름 5, 모선 13인 원뿔의 부피는?`, `$100\\pi$`);
  if (type===13) return createProblem('2-2-3', diff, `한 변의 길이가 2인 정육면체를 자른 단면인 정육각형의 넓이는?`, `$3\\sqrt{3}$`);
  if (type===14) return createProblem('2-2-3', diff, `직각삼각형의 빗변 위에 그려진 반원의 넓이는 나머지 두 변 위에 그려진 반원의 넓이의 합과 같다. (O/X)`, `O`);
  return createProblem('2-2-3', diff, `한 변의 길이가 10인 마름모의 한 대각선이 12일 때, 다른 대각선의 길이는?`, `16`);
};

// ==========================================
// UNIT 4: Probability (확률)
// ==========================================

const probLow = (): Problem => {
  const diff = 'Low';
  const type = randomInt(1, 15);

  if (type===1) return createProblem('2-2-4', diff, `주사위 한 개를 던질 때, 짝수의 눈이 나올 확률은?`, `1/2`);
  if (type===2) return createProblem('2-2-4', diff, `동전 2개를 동시에 던질 때, 모두 앞면이 나올 확률은?`, `1/4`);
  if (type===3) return createProblem('2-2-4', diff, `1부터 10까지의 자연수가 적힌 10장의 카드 중에서 한 장을 뽑을 때, 3의 배수가 나올 확률은?`, `3/10`);
  if (type===4) return createProblem('2-2-4', diff, `두 사람이 가위바위보를 할 때 비길 확률은?`, `1/3`);
  if (type===5) return createProblem('2-2-4', diff, `어떤 사건이 일어날 확률을 $p$라고 할 때, $p$의 범위는?`, `$0 \\le p \\le 1$`);
  if (type===6) return createProblem('2-2-4', diff, `반드시 일어나는 사건의 확률은?`, `1`);
  if (type===7) return createProblem('2-2-4', diff, `절대로 일어나지 않는 사건의 확률은?`, `0`);
  if (type===8) return createProblem('2-2-4', diff, `사건 A가 일어날 확률이 $p$일 때, 일어나지 않을 확률은?`, `$1-p$`);
  if (type===9) return createProblem('2-2-4', diff, `A, B, C, D 네 사람이 한 줄로 설 때, A가 맨 앞에 설 확률은?`, `1/4`);
  if (type===10) return createProblem('2-2-4', diff, `서로 다른 주사위 2개를 던질 때, 눈의 합이 2일 확률은?`, `1/36`);
  if (type===11) return createProblem('2-2-4', diff, `동전 1개를 던질 때 뒷면이 나올 확률은?`, `1/2`);
  if (type===12) return createProblem('2-2-4', diff, `주사위 1개를 던질 때 7 이상의 눈이 나올 확률은?`, `0`);
  if (type===13) return createProblem('2-2-4', diff, `남학생 2명, 여학생 3명 중에서 1명을 뽑을 때 남학생일 확률은?`, `2/5`);
  if (type===14) return createProblem('2-2-4', diff, `서로 다른 동전 3개를 던질 때 일어나는 모든 경우의 수는?`, `8`);
  return createProblem('2-2-4', diff, `A, B 두 사람이 한 줄로 설 때 B가 앞에 설 확률은?`, `1/2`);
};

const probMid = (): Problem => {
  const diff = 'Mid';
  const type = randomInt(1, 15);
  
  if (type===1) { const t = 7; return createProblem('2-2-4', diff, `서로 다른 두 개의 주사위를 동시에 던질 때, 두 눈의 수의 합이 ${t}일 확률은?`, `1/6`); }
  if (type===2) return createProblem('2-2-4', diff, `동전 3개를 동시에 던질 때, 적어도 한 개는 앞면이 나올 확률은?`, `7/8`);
  if (type===3) return createProblem('2-2-4', diff, `5명의 학생 중에서 대표 2명을 뽑을 때, A가 뽑힐 확률은?`, `2/5`);
  if (type===4) return createProblem('2-2-4', diff, `주머니 속에 흰 공 3개, 검은 공 2개가 들어 있다. 공을 한 개 꺼내 확인하고 다시 넣는 시행을 2번 반복할 때, 2번 모두 흰 공이 나올 확률은?`, `9/25`);
  if (type===5) return createProblem('2-2-4', diff, `주머니 속에 흰 공 3개, 검은 공 2개가 들어 있다. 공을 한 개 꺼내 확인하고 다시 넣지 않을 때, 2번 모두 흰 공이 나올 확률은?`, `3/10`);
  if (type===6) return createProblem('2-2-4', diff, `1부터 20까지의 카드가 있다. 4의 배수 또는 9의 배수를 뽑을 확률은?`, `7/20`);
  if (type===7) return createProblem('2-2-4', diff, `4등분 된 원판 과녁에 화살을 쏠 때, 특정한 한 구역을 맞힐 확률은?`, `1/4`);
  if (type===8) return createProblem('2-2-4', diff, `부모님을 포함하여 4명이 일렬로 설 때, 부모님이 이웃하여 설 확률은?`, `1/2`);
  if (type===9) return createProblem('2-2-4', diff, `내일 비가 올 확률이 0.3, 모레 비가 올 확률이 0.4이다. 이틀 모두 비가 오지 않을 확률은?`, `0.42`);
  if (type===10) return createProblem('2-2-4', diff, `비가 올 확률이 0.3, 0.4이다. 이틀 중 하루만 비가 올 확률은?`, `0.46`);
  if (type===11) return createProblem('2-2-4', diff, `주사위 2개를 던져서 나온 눈의 수가 서로 같을 확률은?`, `1/6`);
  if (type===12) return createProblem('2-2-4', diff, `남학생 3명, 여학생 2명을 한 줄로 세울 때, 여학생끼리 이웃할 확률은?`, `2/5`);
  if (type===13) return createProblem('2-2-4', diff, `시험에 A가 합격할 확률 1/2, B가 합격할 확률 1/3이다. 두 사람 모두 불합격할 확률은?`, `1/3`);
  if (type===14) return createProblem('2-2-4', diff, `주사위 1개를 2번 던질 때, 첫 번째는 짝수, 두 번째는 홀수가 나올 확률은?`, `1/4`);
  return createProblem('2-2-4', diff, `A, B, C, D, E 5명 중 반장 1명, 부반장 1명을 뽑을 때 A가 반장이 될 확률은?`, `1/5`);
};

const probHigh = (): Problem => {
  const diff = 'High';
  const type = randomInt(1, 15);

  if (type===1) return createProblem('2-2-4', diff, `4개의 윷가락을 던질 때, 뒷면이 2개(개)가 나올 확률은? (단, 등과 배가 나올 확률은 같다고 가정한다)`, `3/8`);
  if (type===2) return createProblem('2-2-4', diff, `서로 다른 주사위 2개를 동시에 던질 때, 나오는 눈의 수의 차가 2 이하일 확률은?`, `2/3`);
  if (type===3) return createProblem('2-2-4', diff, `주머니 A에는 흰 공 2개, 검은 공 3개가 들어있고, 주머니 B에는 흰 공 3개, 검은 공 1개가 들어있다. 두 주머니에서 각각 하나씩 꺼낼 때 둘 다 흰 공일 확률은?`, `3/10`);
  if (type===4) return createProblem('2-2-4', diff, `A, B 두 사람이 가위바위보를 한 번 할 때, A가 이길 확률은?`, `1/3`);
  if (type===5) return createProblem('2-2-4', diff, `1부터 9까지의 숫자가 적힌 카드 중에서 2장을 뽑아 두 자리 정수를 만들 때, 그 수가 3의 배수일 확률은?`, `1/3`);
  if (type===6) return createProblem('2-2-4', diff, `명중률이 각각 0.8, 0.6인 두 사수가 동시에 표적을 쏠 때, 표적이 총알에 맞을 확률은? (적어도 한 명 명중)`, `0.92`);
  if (type===7) return createProblem('2-2-4', diff, `10개의 제비 중 당첨 제비가 3개 있다. A가 먼저 하나 뽑고, 다시 넣지 않은 상태에서 B가 하나 뽑을 때 B가 당첨될 확률은?`, `3/10`);
  if (type===8) return createProblem('2-2-4', diff, `한 개의 주사위를 두 번 던져서 나온 눈의 수를 차례로 $a, b$라 할 때, $ab$가 짝수일 확률은?`, `3/4`);
  if (type===9) return createProblem('2-2-4', diff, `0, 1, 2, 3, 4의 숫자가 적힌 5장의 카드 중 2장을 뽑아 두 자리 자연수를 만들 때, 그 수가 짝수일 확률은?`, `5/8`);
  if (type===10) return createProblem('2-2-4', diff, `세 사람이 가위바위보를 할 때, 승부가 나지 않을(비길) 확률은?`, `1/3`);
  if (type===11) return createProblem('2-2-4', diff, `주사위 2개를 던져 나온 눈의 합이 5의 배수가 될 확률은? (5, 10)`, `7/36`);
  if (type===12) return createProblem('2-2-4', diff, `길이가 2, 4, 6, 8인 막대 4개 중 3개를 고를 때, 삼각형이 만들어질 확률은?`, `1/4`);
  if (type===13) return createProblem('2-2-4', diff, `어떤 야구 선수의 타율이 0.3이다. 이 선수가 3번 타석에 들어서서 적어도 한 번 안타를 칠 확률은?`, `0.657`);
  if (type===14) return createProblem('2-2-4', diff, `주머니에 빨간 공 4개, 파란 공 6개가 있다. 연속해서 2개를 꺼낼 때 두 공의 색이 다를 확률은? (비복원)`, `8/15`);
  return createProblem('2-2-4', diff, `5지 선다형 문제 3개를 임의로 찍어서 모두 맞힐 확률은?`, `1/125`);
};

// ==========================================
// Main Generator Function
// ==========================================

export const generateSemester2Problem = (unitId: string, difficulty: Difficulty): Problem => {
  if (unitId === '2-2-1') {
    if (difficulty === 'Low') return shapeLow();
    if (difficulty === 'Mid') return shapeMid();
    return shapeHigh();
  }
  if (unitId === '2-2-2') {
    if (difficulty === 'Low') return simLow();
    if (difficulty === 'Mid') return simMid();
    return simHigh();
  }
  if (unitId === '2-2-3') {
    if (difficulty === 'Low') return pythLow();
    if (difficulty === 'Mid') return pythMid();
    return pythHigh();
  }
  if (unitId === '2-2-4') {
    if (difficulty === 'Low') return probLow();
    if (difficulty === 'Mid') return probMid();
    return probHigh();
  }
  return shapeLow(); // fallback
};