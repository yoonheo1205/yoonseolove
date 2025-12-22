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
  const type = randomInt(1, 23);

  if (type === 1) { const v = randomInt(40, 80); return createProblem('2-2-1', diff, `이등변삼각형 $ABC$에서 $AB=AC$이고, $\\angle A = ${v}^\\circ$일 때, 밑각 $\\angle B$의 크기를 구하시오.`, `$${(180-v)/2}^\\circ$`); }
  if (type === 2) { const b = randomInt(30, 70); return createProblem('2-2-1', diff, `이등변삼각형 $ABC$에서 $AB=AC$이고, 밑각 $\\angle B = ${b}^\\circ$일 때, 꼭짓각 $\\angle A$의 크기를 구하시오.`, `$${180-2*b}^\\circ$`); }
  if (type === 3) return createProblem('2-2-1', diff, `직각삼각형에서 빗변의 길이와 한 예각의 크기가 각각 같은 두 삼각형이 있다. 이 두 삼각형이 합동임을 보일 때 사용하는 합동 조건은 무엇인가요?`, `RHA 합동`);
  if (type === 4) { const a = randomInt(50, 70); return createProblem('2-2-1', diff, `$\\triangle ABC$의 외심을 $O$라 할 때, $\\angle A = ${a}^\\circ$이면 중심각 $\\angle BOC$의 크기를 구하시오.`, `$${2*a}^\\circ$`); }
  if (type === 5) { const a = randomInt(40, 80); return createProblem('2-2-1', diff, `$\\triangle ABC$의 내심을 $I$라 할 때, $\\angle A = ${a}^\\circ$이면 $\\angle BIC$의 크기를 구하시오.`, `$${90 + a/2}^\\circ$`); }
  if (type === 6) { const a = randomInt(60, 120); return createProblem('2-2-1', diff, `평행사변형 $ABCD$에서 $\\angle A = ${a}^\\circ$일 때, 이웃한 각 $\\angle B$의 크기를 구하시오.`, `$${180-a}^\\circ$`); }
  if (type === 7) { const a = randomInt(3, 10); return createProblem('2-2-1', diff, `평행사변형 $ABCD$에서 $AB=${a}\\text{cm}$일 때, 대변 $CD$의 길이를 구하시오.`, `${a}\\text{cm}`); }
  if (type === 8) { const d = randomInt(5, 15); return createProblem('2-2-1', diff, `직사각형의 한 대각선의 길이가 ${d}\\text{cm}$일 때, 다른 대각선의 길이를 구하시오.`, `${d}\\text{cm}`); }
  if (type === 9) return createProblem('2-2-1', diff, `마름모의 두 대각선이 이루는 각의 크기를 구하시오.`, `$90^\\circ$`);
  if (type === 10) return createProblem('2-2-1', diff, `정사각형의 한 내각의 크기를 구하시오.`, `$90^\\circ$`);
  if (type === 11) { const n = randomItem([5, 6, 8]); return createProblem('2-2-1', diff, `정${n}각형의 내각의 합을 구하시오.`, `$${180*(n-2)}^\\circ$`); }
  if (type === 12) { const n = randomItem([9, 10, 12]); return createProblem('2-2-1', diff, `정${n}각형의 한 외각의 크기를 구하시오.`, `$${360/n}^\\circ$`); }
  if (type === 13) return createProblem('2-2-1', diff, `평행사변형이 마름모가 되기 위한 조건을 서술하시오.`, `서로 이웃한 두 변의 길이가 같다.`);
  if (type === 14) return createProblem('2-2-1', diff, `직각삼각형의 합동 조건 중에서 빗변과 다른 한 변의 길이가 각각 같은 경우의 합동 조건을 기호로 쓰시오.`, `RHS 합동`);
  if (type === 15) return createProblem('2-2-1', diff, `삼각형의 세 내각의 이등분선의 교점을 무엇이라고 하는가?`, `내심`);
  if (type === 16) return createProblem('2-2-1', diff, `원에서 중심과 꼭짓점을 잇는 선분의 길이가 모두 같은 삼각형을 무엇이라고 하는가?`, `정삼각형`);
  if (type === 17) return createProblem('2-2-1', diff, `사다리꼴에서 서로 평행한 두 변을 무엇이라고 하는지 쓰시오.`, `밑변과 윗변`);
  if (type === 18) return createProblem('2-2-1', diff, `평행사변형의 두 대각선은 서로 어떤 관계인지 서술하시오.`, `서로를 이등분한다.`);
  if (type === 19) return createProblem('2-2-1', diff, `정육각형의 한 내각의 크기를 구하시오.`, `$120^\\circ$`);
  if (type === 20) return createProblem('2-2-1', diff, `한 꼭짓점에서 나오는 정다각형의 한 외각과 인접한 내각의 관계를 말로 설명하시오.`, `합이 180^\\circ 이다.`);
  if (type === 21) return createProblem('2-2-1', diff, `원에서 한 호에 대한 중심각의 크기와 원주각의 크기 사이의 관계를 말하시오.`, `중심각의 크기는 원주각의 두 배이다.`);
  if (type === 22) return createProblem('2-2-1', diff, `마름모의 성질 중, 네 변의 길이와 대각선의 관계를 각각 한 문장으로 설명하시오.`, `네 변의 길이는 모두 같고, 두 대각선은 서로 수직으로 이등분한다.`);
  return createProblem('2-2-1', diff, `직사각형과 정사각형의 공통된 성질을 한 가지 쓰시오.`, `네 각의 크기가 모두 90^\\circ 이다.`);
};

const shapeMid = (): Problem => {
  const diff = 'Mid';
  const type = randomInt(1, 23);

  if (type === 1) { const angle = randomInt(20, 50); return createProblem('2-2-1', diff, `직사각형 모양의 종이를 한 변의 중점을 지나도록 접었더니, 접힌 각이 ${angle}^\\circ$가 되었다. 엇각의 성질을 이용하면 겹친 부분의 삼각형은 어떤 삼각형인지 쓰시오.`, `이등변삼각형`); }
  if (type === 2) { const r = randomInt(3, 8); return createProblem('2-2-1', diff, `$\\triangle ABC$의 외심 $O$에서 꼭짓점 $A$까지의 거리가 ${r}\\text{cm}$이다. 이때 꼭짓점 $B$까지의 거리를 구하시오.`, `${r}\\text{cm}`); }
  if (type === 3) { const hyp = randomInt(6, 14) * 2; return createProblem('2-2-1', diff, `빗변의 길이가 ${hyp}\\text{cm}$인 직각삼각형의 외접원의 반지름의 길이를 구하시오.`, `${hyp/2}\\text{cm}`); }
  if (type === 4) { const b = 30, c = 70; return createProblem('2-2-1', diff, `$\\triangle ABC$에서 $\\angle B=${b}^\\circ$, $\\angle C=${c}^\\circ$일 때, 내심 $I$에 대하여 $\\angle IAC$의 크기를 구하시오.`, `$${(180-b-c)/2}^\\circ$`); }
  if (type === 5) { const a = 5, b = 8; return createProblem('2-2-1', diff, `이웃하는 두 변의 길이가 각각 ${a}\\text{cm}, ${b}\\text{cm}인 평행사변형의 둘레의 길이를 구하시오.`, `${2*(a+b)}\\text{cm}`); }
  if (type === 6) { const d1 = 8, d2 = 6; return createProblem('2-2-1', diff, `두 대각선의 길이가 각각 ${d1}\\text{cm}, ${d2}\\text{cm}인 마름모의 넓이를 구하시오.`, `${d1*d2/2}\\text{cm}^2$`); }
  if (type === 7) { const u = 6, l = 10; return createProblem('2-2-1', diff, `윗변의 길이가 ${u}\\text{cm}, 아랫변의 길이가 ${l}\\text{cm}인 사다리꼴에서 두 옆변의 중점을 이은 선분의 길이를 구하시오.`, `${(u+l)/2}\\text{cm}`); }
  if (type === 8) { const dAngle = 30; return createProblem('2-2-1', diff, `직사각형의 대각선과 밑변이 이루는 각이 ${dAngle}^\\circ$일 때, 두 대각선이 이루는 예각의 크기를 구하시오.`, `$${2*dAngle}^\\circ$`); }
  if (type === 9) return createProblem('2-2-1', diff, `마름모가 정사각형이 되기 위한 조건으로, 한 내각이 $90^\\circ$이거나 두 어떤 선분의 길이가 같아야 하는지 쓰시오.`, `두 대각선의 길이가 같다.`);
  if (type === 10) return createProblem('2-2-1', diff, `직각삼각형에서 빗변의 중점은 삼각형의 어떤 점과 일치하는지 쓰시오.`, `외심`);
  if (type === 11) { const angle = 120; return createProblem('2-2-1', diff, `원에서 중심각 $\\angle BOC = ${angle}^\\circ$일 때, 같은 호 $BC$에 대한 원주각 $\\angle A$의 크기를 구하시오.`, `$${angle/2}^\\circ$`); }
  if (type === 12) return createProblem('2-2-1', diff, `평행사변형의 두 대각선은 서로 어떻게 되는지 서술하시오.`, `서로를 이등분한다.`);
  if (type === 13) { const a = 3, b = 4, c = 5; return createProblem('2-2-1', diff, `세 변의 길이가 3, 4, 5인 직각삼각형의 내접원의 반지름 $r$의 길이를 구하시오.`, `1`); }
  if (type === 14) return createProblem('2-2-1', diff, `등변사다리꼴에서 두 대각선의 길이는 서로 어떤 관계에 있는지 쓰시오.`, `서로 같다.`);
  if (type === 15) return createProblem('2-2-1', diff, `어떤 사각형의 네 변의 중점을 차례로 이으면 항상 평행사변형이 된다. 이때 원래 사각형이 직사각형이면 어떤 사각형이 되는지 쓰시오.`, `마름모`);
  if (type === 16) return createProblem('2-2-1', diff, `정다각형의 한 내각의 크기가 $135^\\circ$일 때, 이 다각형이 몇각형인지 구하시오.`, `8각형`);
  if (type === 17) return createProblem('2-2-1', diff, `한 평행사변형의 한 각이 $70^\\circ$일 때, 나머지 세 각의 크기를 모두 구하시오.`, `70^\\circ, 110^\\circ, 110^\\circ`);
  if (type === 18) return createProblem('2-2-1', diff, `정오각형의 한 내각과 한 외각의 크기를 각각 구하시오.`, `내각 108^\\circ, 외각 72^\\circ`);
  if (type === 19) return createProblem('2-2-1', diff, `원에서 두 현이 서로 수직으로 만날 때, 그 교점에서 각 현의 네 조각 중 서로 마주보는 조각들의 길이의 곱이 같은 이유를 간단히 설명하시오.`, `닮음에 의해 생기는 곱의 관계`);
  if (type === 20) return createProblem('2-2-1', diff, `직사각형의 한 변의 길이가 5cm이고, 대각선의 길이가 13cm일 때 다른 변의 길이를 구하시오.`, `12cm`);
  if (type === 21) return createProblem('2-2-1', diff, `사다리꼴의 두 밑변의 길이가 6cm와 10cm이고, 높이가 4cm일 때, 넓이를 구하시오.`, `32cm^2`);
  if (type === 22) return createProblem('2-2-1', diff, `삼각형 $ABC$에서 $AB=AC$인 이등변삼각형이고, $\\angle B=40^\\circ$일 때, 외각의 성질을 이용하여 $\\angle ACD$ (외각)의 크기를 구하시오.`, `100^\\circ`);
  return createProblem('2-2-1', diff, `평행사변형과 사다리꼴의 공통된 성질을 한 가지 쓰시오.`, `한 쌍 이상의 대변이 서로 평행이다.`);
};

const shapeHigh = (): Problem => {
  const diff = 'High';
  const type = randomInt(1, 23);

  if (type === 1) return createProblem('2-2-1', diff, `$\\triangle ABC$의 내심 $I$를 지나고 $BC$에 평행한 직선이 $AB, AC$와 만나는 점을 각각 $D, E$라 한다. $DB=6$, $EC=5$일 때, 선분 $DE$의 길이를 구하시오.`, `11`);
  if (type === 2) { const a = 44; return createProblem('2-2-1', diff, `$\\triangle ABC$에서 $\\angle A = ${a}^\\circ$일 때, 외심 $O$와 내심 $I$에 대하여 $\\angle BOC - \\angle BIC$의 값을 구하시오.`, `$${2*a - (90+a/2)}^\\circ$`); }
  if (type === 3) return createProblem('2-2-1', diff, `등변사다리꼴 $ABCD$에서 $AD \\parallel BC$이고 $AB=AD=6$, $\\angle B=60^\\circ$일 때, 이 사다리꼴의 둘레의 길이를 구하시오.`, `30`);
  if (type === 4) return createProblem('2-2-1', diff, `가로 8, 세로 6인 직사각형 $ABCD$에서 대각선 $BD$를 접는 선으로 하여 종이를 접었다. 겹쳐지는 삼각형 $\\triangle PBD$의 넓이를 구하시오.`, `$\\dfrac{75}{4}$`); 
  if (type === 5) return createProblem('2-2-1', diff, `정사각형 $ABCD$ 안에 정삼각형 $EBC$가 그려져 있다. 이때 $\\angle AED$의 크기를 구하시오.`, `$150^\\circ$`);
  if (type === 6) return createProblem('2-2-1', diff, `평행사변형 $ABCD$에서 $\\angle A$의 이등분선이 $BC$와 만나는 점을 $E$라 하자. $AB=5$, $AD=8$일 때, $EC$의 길이를 구하시오.`, `3`);
  if (type === 7) return createProblem('2-2-1', diff, `임의의 사각형의 각 변의 중점을 연결하여 만든 사각형은 어떤 종류의 사각형이 되는가?`, `평행사변형`);
  if (type === 8) return createProblem('2-2-1', diff, `직사각형 $ABCD$의 내부에 임의의 점 $P$가 있을 때, $PA^2 + PC^2 = 20$이면 $PB^2 + PD^2$의 값을 구하시오.`, `20`);
  if (type === 9) return createProblem('2-2-1', diff, `삼각형 $ABC$의 무게중심을 $G$라 할 때, $\\triangle GAB$의 넓이가 10이다. 이때 삼각형 $ABC$의 넓이를 구하시오.`, `30`);
  if (type === 10) return createProblem('2-2-1', diff, `직각삼각형의 내접원의 반지름이 2이고, 둘레의 길이가 24일 때, 이 직각삼각형의 넓이를 구하시오.`, `24`);
  if (type === 11) return createProblem('2-2-1', diff, `정사각형 $ABCD$의 대각선 $AC$ 위의 점 $P$에 대하여 $\\angle ABP=25^\\circ$일 때, $\\angle ADP$의 크기를 구하시오.`, `$25^\\circ$`);
  if (type === 12) return createProblem('2-2-1', diff, `삼각형의 내심과 외심이 일치하는 삼각형은 어떤 삼각형인지 쓰시오.`, `정삼각형`);
  if (type === 13) return createProblem('2-2-1', diff, `평행사변형 $ABCD$ 내부의 점 $P$에 대하여 $\\triangle PAB$와 $\\triangle PCD$의 넓이의 합이 20일 때, 평행사변형 $ABCD$의 넓이를 구하시오.`, `40`);
  if (type === 14) return createProblem('2-2-1', diff, `직각삼각형 $ABC$의 외심을 $O$라 할 때, $OA+OB+OC=30$이면 빗변 $BC$의 길이를 구하시오.`, `20`);
  if (type === 15) return createProblem('2-2-1', diff, `내각의 크기의 합이 $1800^\\circ$인 볼록다각형은 몇각형인지 구하시오.`, `12각형`);
  if (type === 16) return createProblem('2-2-1', diff, `마름모의 한 대각선의 길이가 10이고 다른 대각선의 길이가 24일 때, 마름모의 넓이를 구하시오.`, `120`);
  if (type === 17) return createProblem('2-2-1', diff, `정삼각형의 한 변의 길이가 4일 때, 외접원의 반지름의 길이를 구하시오.`, `\\dfrac{4}{\\sqrt{3}}`);
  if (type === 18) return createProblem('2-2-1', diff, `사다리꼴의 윗변, 아랫변, 높이가 각각 6cm, 14cm, 5cm일 때, 중선의 길이와 넓이를 각각 구하시오.`, `중선 10cm, 넓이 50cm^2`);
  if (type === 19) return createProblem('2-2-1', diff, `직각삼각형 $ABC$에서 빗변 $BC$의 길이가 10이고, 빗변에 내린 높이의 길이가 6일 때, 이 삼각형의 넓이를 구하시오.`, `30`);
  if (type === 20) return createProblem('2-2-1', diff, `정사각형 $ABCD$의 한 변의 길이가 2일 때, 네 꼭짓점을 모두 지나는 원의 넓이를 구하시오.`, `2\\pi`);
  if (type === 21) return createProblem('2-2-1', diff, `직각삼각형의 세 변의 길이가 5, 12, 13일 때, 외접원의 넓이를 구하시오.`, `\\dfrac{169\\pi}{4}`);
  if (type === 22) return createProblem('2-2-1', diff, `정오각형의 한 변의 길이가 2일 때, 대각선의 길이를 황금비를 이용하여 나타내시오.`, `$2\\varphi$`);
  return createProblem('2-2-1', diff, `정사각형의 각 변의 중점을 차례로 이으면 또 하나의 정사각형이 생긴다. 원래 정사각형의 한 변의 길이가 4일 때, 안쪽 정사각형의 넓이를 구하시오.`, `8`);
};

// ==========================================
// UNIT 2: Similarity (도형의 닮음)
// ==========================================

const simLow = (): Problem => {
  const diff = 'Low';
  const type = randomInt(1, 23);
  
  if (type===1) return createProblem('2-2-2', diff, `다음 중 삼각형의 닮음 조건이 아닌 것을 고르시오. (SAS, SSS, AA, ASA)`, `ASA`);
  if (type===2) { const s = randomInt(2,5); return createProblem('2-2-2', diff, `두 닮은 평면도형의 닮음비가 $1:${s}$일 때, 넓이의 비를 구하시오.`, `$1:${s*s}$`); }
  if (type===3) { const s = randomInt(2,4); return createProblem('2-2-2', diff, `두 닮은 입체도형의 닮음비가 $1:${s}$일 때, 부피의 비를 구하시오.`, `$1:${s*s*s}$`); }
  if (type===4) return createProblem('2-2-2', diff, `$\\triangle ABC \\sim \\triangle DEF$이고 $AB=4$, $DE=8$일 때, 두 삼각형의 닮음비를 구하시오.`, `1:2`);
  if (type===5) return createProblem('2-2-2', diff, `축척이 1:50000인 지도에서 거리가 2cm인 두 지점 사이의 실제 거리를 km 단위로 구하시오.`, `1km`);
  if (type===6) return createProblem('2-2-2', diff, `삼각형의 무게중심 $G$는 중선을 꼭짓점으로부터 몇 대 몇으로 나누는지 쓰시오.`, `2:1`);
  if (type===7) return createProblem('2-2-2', diff, `삼각형의 두 변의 중점을 연결한 선분은 나머지 한 변과 평행하고, 그 길이는 나머지 변의 몇 분의 몇인지 쓰시오.`, `1/2`);
  if (type===8) return createProblem('2-2-2', diff, `서로 닮은 두 평면도형에서 대응하는 각의 크기는 어떻게 되는지 쓰시오.`, `서로 같다.`);
  if (type===9) return createProblem('2-2-2', diff, `직각삼각형의 직각인 꼭짓점에서 빗변에 수선을 내렸을 때, 서로 닮은 삼각형은 모두 몇 개인가?`, `3개`);
  if (type===10) return createProblem('2-2-2', diff, `항상 서로 닮은 도형을 고르시오. (정삼각형, 이등변삼각형, 직사각형)`, `정삼각형`);
  if (type===11) return createProblem('2-2-2', diff, `닮음비가 $2:3$인 두 원의 둘레의 길이의 비를 구하시오.`, `2:3`);
  if (type===12) return createProblem('2-2-2', diff, `정육면체의 한 모서리의 길이를 2배로 하면, 부피는 몇 배가 되는지 구하시오.`, `8배`);
  if (type===13) return createProblem('2-2-2', diff, `$\\triangle ABC$에서 $AB$와 $AC$의 중점을 각각 $D, E$라 할 때, $BC=12$이면 $DE$의 길이를 구하시오.`, `6`);
  if (type===14) return createProblem('2-2-2', diff, `모든 원은 서로 닮음인지 O, X로 답하시오.`, `O`);
  if (type===15) return createProblem('2-2-2', diff, `두 구의 겉넓이의 비가 $4:9$일 때, 반지름의 길이의 비를 구하시오.`, `$2:3$`);
  if (type===16) return createProblem('2-2-2', diff, `정사각형 두 개의 한 변의 길이의 비가 $1:3$일 때, 넓이의 비를 구하시오.`, `1:9`);
  if (type===17) return createProblem('2-2-2', diff, `서로 닮은 두 직사각형의 한 변의 길이의 비가 $2:5$일 때, 둘레의 길이의 비를 구하시오.`, `2:5`);
  if (type===18) return createProblem('2-2-2', diff, `정육각형과 정삼각형은 항상 서로 닮음인지 O, X로 답하고, 이유를 간단히 쓰시오.`, `X, 변의 개수가 다르다.`);
  if (type===19) return createProblem('2-2-2', diff, `한 변의 길이가 3인 정사각형과 한 변의 길이가 6인 정사각형의 넓이의 비를 구하시오.`, `1:4`);
  if (type===20) return createProblem('2-2-2', diff, `삼각형에서 한 변의 길이를 2배로, 높이를 그대로 두면 넓이는 몇 배가 되는지 쓰시오.`, `2배`);
  if (type===21) return createProblem('2-2-2', diff, `두 평면도형이 서로 닮음일 때, 대응하는 선분의 길이의 비와 둘레의 비는 어떤 관계인지 말로 설명하시오.`, `둘레의 비는 선분의 비와 같다.`);
  if (type===22) return createProblem('2-2-2', diff, `두 원기둥의 닮음비가 $1:2$일 때, 부피의 비를 구하시오.`, `1:8`);
  return createProblem('2-2-2', diff, `닮음인 두 삼각형에서 대응하는 높이의 비는 무엇의 비와 같은지 쓰시오.`, `대응하는 변의 길이의 비`);
};

const simMid = (): Problem => {
  const diff = 'Mid';
  const type = randomInt(1, 23);
  
  if (type===1) return createProblem('2-2-2', diff, `높이가 1m인 막대의 그림자가 1.5m일 때, 같은 시각에 그림자의 길이가 6m인 나무의 높이를 구하시오.`, `4m`);
  if (type===2) { const a = 10, b = 15; const h = (a*b)/(a+b); return createProblem('2-2-2', diff, `높이가 각각 ${a}m, ${b}m인 두 전봇대 사이에서, 밑부분과 꼭대기를 교차하여 연결한 줄이 만나는 지점의 높이를 구하시오.`, `${h}m`); }
  if (type===3) return createProblem('2-2-2', diff, `$\\triangle ABC$에서 $\\angle A$의 이등분선이 $BC$와 만나는 점을 $D$라 하자. $AB=6, AC=4, BC=5$일 때, $BD$의 길이를 구하시오.`, `3`);
  if (type===4) return createProblem('2-2-2', diff, `$\\triangle ABC$의 넓이가 36일 때, 무게중심 $G$에 대하여 $\\triangle GBC$의 넓이를 구하시오.`, `12`);
  if (type===5) return createProblem('2-2-2', diff, `$\\triangle ABC \\sim \\triangle DEF$이고 닮음비가 $2:3$이다. $\\triangle ABC$의 둘레가 10일 때, $\\triangle DEF$의 둘레를 구하시오.`, `15`);
  if (type===6) { const u = 8, d = 14; return createProblem('2-2-2', diff, `사다리꼴의 윗변이 ${u}, 아랫변이 ${d}$일 때, 두 변의 중점을 연결한 선분의 길이를 구하시오.`, `11`); }
  if (type===7) { return createProblem('2-2-2', diff, `직각삼각형 $ABC(\\angle A=90^\\circ)$에서 빗변 $BC$ 위에 수선 $AH$를 내렸다. $BH=4, HC=9$일 때, $AH^2$의 값을 구하시오.`, `36`); }
  if (type===8) return createProblem('2-2-2', diff, `반지름의 길이가 3배인 큰 쇠구슬을 녹여 같은 모양의 작은 쇠구슬을 만들 때, 최대 몇 개를 만들 수 있는지 구하시오.`, `27개`);
  if (type===9) return createProblem('2-2-2', diff, `원뿔을 높이의 $1/2$ 지점에서 밑면에 평행하게 잘랐다. 위쪽 작은 원뿔과 아래쪽 원뿔대의 부피의 비를 구하시오.`, `1:7`);
  if (type===10) return createProblem('2-2-2', diff, `평행사변형 $ABCD$에서 대각선 $AC$와 $BD$는 서로를 이등분한다. 이때 생기는 네 개의 삼각형의 무게중심을 이으면 어떤 도형이 되는지 쓰고, 그 이유를 간단히 설명하시오.`, `평행사변형`);
  if (type===11) return createProblem('2-2-2', diff, `삼각형의 외각의 이등분선 정리, $AB:AC = BD:CD$가 성립하는지 O, X로 답하시오.`, `O`);
  if (type===12) return createProblem('2-2-2', diff, `A4 용지와 A3 용지는 서로 닮음이다. 긴 변을 기준으로 한 닮음비를 구하시오.`, `$1:\\sqrt{2}$`);
  if (type===13) return createProblem('2-2-2', diff, `원뿔 모양 그릇에 높이의 $\\dfrac{2}{3}$까지 물을 채웠을 때, 물의 부피는 그릇 전체 부피의 몇 분의 몇인지 구하시오.`, `8/27`);
  if (type===14) return createProblem('2-2-2', diff, `직각삼각형의 닮음 공식을 이용할 때, 빗변 위의 수선의 발을 $H$라고 하면 $c^2 = a \\times x$와 같은 꼴의 공식이 성립하는지 O, X로 답하시오.`, `O`);
  if (type===15) return createProblem('2-2-2', diff, `삼각형 $ABC$의 무게중심 $G$를 지나는 중선의 전체 길이를 $m$이라고 할 때, 꼭짓점에서 $G$까지의 거리는 얼마인지 $m$을 사용하여 나타내시오.`, `$\\dfrac{2}{3}m$`);
  if (type===16) return createProblem('2-2-2', diff, `두 직육면체의 닮음비가 $1:2$일 때, 겉넓이와 부피의 비를 각각 구하시오.`, `겉넓이 1:4, 부피 1:8`);
  if (type===17) return createProblem('2-2-2', diff, `정삼각형의 한 변의 길이가 6일 때, 이 삼각형과 닮음비가 $1:2$인 정삼각형의 넓이의 비를 구하시오.`, `1:4`);
  if (type===18) return createProblem('2-2-2', diff, `밑면의 반지름과 높이가 각각 2배가 된 원기둥의 부피는 원래 원기둥 부피의 몇 배가 되는지 구하시오.`, `8배`);
  if (type===19) return createProblem('2-2-2', diff, `두 원의 반지름의 길이의 비가 $3:5$일 때, 둘레의 길이와 넓이의 비를 각각 구하시오.`, `둘레 3:5, 넓이 9:25`);
  if (type===20) return createProblem('2-2-2', diff, `밑변이 10이고 높이가 6인 삼각형과 밑변이 5이고 높이가 3인 삼각형이 서로 닮음인지 넓이를 통해 판단하시오.`, `닮음이다 (배율 2배)`);
  if (type===21) return createProblem('2-2-2', diff, `사다리꼴에서 윗변, 아랫변, 높이가 각각 4, 10, 3일 때, 이와 닮음인 사다리꼴의 윗변이 6이라면 아랫변과 높이는 얼마인지 구하시오.`, `아랫변 15, 높이 4.5`);
  if (type===22) return createProblem('2-2-2', diff, `정육면체의 한 모서리의 길이를 3배로 하면, 겉넓이와 부피는 각각 몇 배가 되는지 구하시오.`, `겉넓이 9배, 부피 27배`);
  return createProblem('2-2-2', diff, `무게중심 $G$를 지나는 중선의 길이는 꼭짓점부터 무게중심까지 거리의 몇 배인지 쓰시오.`, `1.5배`);
};

const simHigh = (): Problem => {
  const diff = 'High';
  const type = randomInt(1, 23);

  if (type===1) return createProblem('2-2-2', diff, `평행사변형 $ABCD$의 넓이가 60이다. $BC$의 중점을 $M$, $CD$의 중점을 $N$이라 할 때, 삼각형 $AMN$의 넓이를 구하시오.`, `22.5`);
  if (type===2) return createProblem('2-2-2', diff, `직각삼각형 $ABC$의 무게중심을 $G$라 하자. 빗변 $BC=12$일 때, 꼭짓점 $A$에서 무게중심 $G$까지의 거리 $AG$를 구하시오.`, `4`);
  if (type===3) return createProblem('2-2-2', diff, `사다리꼴 $ABCD$ ($AD\\parallel BC$)에서 $AD=4$, $BC=6$이다. 두 대각선의 교점 $O$를 지나고 밑변에 평행한 선분이 옆변과 만나는 점을 $P, Q$라 할 때, $PQ$의 길이를 구하시오.`, `4.8`);
  if (type===4) return createProblem('2-2-2', diff, `$\\triangle ABC$에서 $\\angle A$의 내각의 이등분선이 $BC$와 만나는 점을 $D$라 하자. $AB=6$, $AC=4$이고 $\\triangle ABD$의 넓이가 9일 때, $\\triangle ADC$의 넓이를 구하시오.`, `6`);
  if (type===5) return createProblem('2-2-2', diff, `축척이 1:1000인 지도에서 넓이가 $20\\text{cm}^2$인 땅의 실제 넓이를 $\\text{m}^2$ 단위로 구하시오.`, `2000m^2`);
  if (type===6) return createProblem('2-2-2', diff, `빈 원뿔 모양 수조에 물을 채우는데 높이의 $1/2$까지 채우는 데 10분이 걸렸다. 같은 속도로 물을 채울 때 가득 채우기까지 더 걸리는 시간을 구하시오.`, `70분`);
  if (type===7) return createProblem('2-2-2', diff, `직각삼각형 $ABC$ ($AB=3, BC=4, \\angle B=90^\\circ$) 내부에 정사각형 $DBEF$가 내접되어 있다. (점 $B$는 삼각형과 정사각형의 공통 꼭짓점) 이 정사각형의 한 변의 길이를 구하시오.`, `12/7`);
  if (type===8) return createProblem('2-2-2', diff, `키가 1.6m인 사람이 가로등 밑에서 초속 1m로 걷고 있다. 가로등의 높이가 4.8m일 때, 그림자 끝이 움직이는 속력을 구하시오.`, `1.5m/s`);
  if (type===9) return createProblem('2-2-2', diff, `정사면체를 각 모서리의 중점을 지나는 평면으로 잘라내어 생기는 팔면체의 부피는 처음 정사면체 부피의 몇 분의 몇인지 구하시오.`, `1/2`);
  if (type===10) return createProblem('2-2-2', diff, `$\\triangle ABC$의 무게중심 $G$를 지나고 변 $BC$에 평행한 직선이 $AB$, $AC$와 만나는 점을 각각 $D$, $E$라 할 때, $\\triangle ADE$의 넓이가 4이면 $\\triangle ABC$의 넓이를 구하시오.`, `9`);
  if (type===11) return createProblem('2-2-2', diff, `정삼각형 $ABC$의 변 $BC$ 위에 $BD:DC=1:2$인 점 $D$가 있다. $\\angle ADE=60^\\circ$가 되도록 변 $AC$ 위에 점 $E$를 잡을 때, $AE:EC$의 비를 구하시오.`, `4:5`); 
  if (type===12) return createProblem('2-2-2', diff, `사다리꼴의 두 대각선의 교점을 지나며 밑변에 평행한 선분의 길이는 윗변과 아랫변의 길이를 각각 $a, b$라 할 때 $\\dfrac{2ab}{a+b}$이다. 이 공식을 이용하여 $a=4$, $b=10$일 때의 선분의 길이를 구하시오.`, `6.4`);
  if (type===13) return createProblem('2-2-2', diff, `$\\triangle ABC$에서 무게중심 $G$와 외심 $O$가 일치한다면 이 삼각형이 정삼각형임을 설명하시오.`, `세 변의 길이가 모두 같기 때문이다.`);
  if (type===14) return createProblem('2-2-2', diff, `닮음비가 $m:n$인 두 원기둥의 겉넓이의 비가 $m^2:n^2$이 됨을 닮음의 성질을 이용하여 설명하시오.`, `반지름의 비가 m:n이므로 원의 넓이 비가 m^2:n^2`);
  if (type===15) return createProblem('2-2-2', diff, `원뿔을 밑면에 평행한 두 평면으로 높이를 세 등분하도록 잘랐을 때, 가장 아래쪽 원뿔대의 부피가 전체 원뿔 부피의 몇 분의 몇인지 구하시오.`, `19/27`);
  if (type===16) return createProblem('2-2-2', diff, `정사각형의 한 변의 길이가 4에서 6으로 커질 때, 정사각형의 넓이는 몇 배가 되는지, 그리고 이 변화가 닮음비와 어떤 관계가 있는지 설명하시오.`, `넓이 2.25배`);
  if (type===17) return createProblem('2-2-2', diff, `어떤 원뿔의 부피가 54이고, 닮음비가 1:3인 더 큰 원뿔을 만들었다. 큰 원뿔의 부피를 구하시오.`, `1458`);
  if (type===18) return createProblem('2-2-2', diff, `밑변의 길이가 각각 6, 9이고 높이가 같은 두 삼각형이 있다. 이 두 삼각형이 서로 닮음이 되기 위한 조건을 말하고, 넓이의 비를 구하시오.`, `둘 다 직각삼각형 등; 넓이비 2:3`);
  if (type===19) return createProblem('2-2-2', diff, `두 계단 모형이 닮음일 때, 가로 길이의 비가 2:5라면 계단 수와 계단의 높이는 각각 어떤 비가 되는지 설명하시오.`, `계단 수와 높이도 2:5`);
  if (type===20) return createProblem('2-2-2', diff, `직각삼각형에서 빗변에 내린 높이를 이용하여 세 개의 닮은 삼각형이 생길 때, 이들 삼각형의 넓이의 비를 구하시오. (정답은 일반적인 비 형태로 제시)`, `h^2 : ab : c^2 꼴`);
  if (type===21) return createProblem('2-2-2', diff, `한 원뿔 모양 탱크에 물을 채울 때, 물의 높이가 $h$일 때의 물의 부피가 $h^3$에 비례함을 닮음을 이용하여 설명하시오.`, `반지름과 높이가 h에 비례하므로 부피는 h^3에 비례`);
  if (type===22) return createProblem('2-2-2', diff, `닮은 두 입체도형에서 닮음비가 $k$일 때, 겉넓이와 부피의 비가 각각 $k^2$, $k^3$이 되는 이유를 서술하시오.`, `길이, 넓이, 부피의 차원(1,2,3차)에 따른 비율`);
  return createProblem('2-2-2', diff, `두 원뿔대가 서로 닮음이고 닮음비가 $1:n$일 때, 두 원뿔대의 부피 비가 $1:n^3$이 되는 이유를 설명하시오.`, `입체 닮음의 성질`);
};

// ==========================================
// UNIT 3: Pythagoras (피타고라스 정리)
// ==========================================

const pythLow = (): Problem => {
  const diff = 'Low';
  const type = randomInt(1, 23);

  const [a, b, c] = randomItem([[3,4,5], [6,8,10], [5,12,13]]);
  if (type===1) return createProblem('2-2-3', diff, `직각을 낀 두 변의 길이가 ${a}, ${b}인 직각삼각형의 빗변의 길이를 구하시오.`, `${c}`);
  if (type===2) return createProblem('2-2-3', diff, `빗변의 길이가 ${c}이고 다른 한 변이 ${a}인 직각삼각형의 나머지 변의 길이를 구하시오.`, `${b}`);
  if (type===3) return createProblem('2-2-3', diff, `가로가 ${a}, 세로가 ${b}인 직사각형의 대각선의 길이를 구하시오.`, `${c}`);
  if (type===4) return createProblem('2-2-3', diff, `세 변의 길이가 3, 4, 5인 삼각형은 직각삼각형인지 O, X로 답하시오.`, `O`);
  if (type===5) return createProblem('2-2-3', diff, `직각삼각형에서 빗변의 길이의 제곱은 나머지 두 변의 길이의 무엇과 같은가?`, `제곱의 합`);
  if (type===6) return createProblem('2-2-3', diff, `좌표평면 위의 원점과 점 $(3, 4)$ 사이의 거리를 구하시오.`, `5`);
  if (type===7) return createProblem('2-2-3', diff, `한 변의 길이가 1인 정사각형의 대각선의 길이를 구하시오.`, `$\\sqrt{2}$`);
  if (type===8) return createProblem('2-2-3', diff, `삼각형의 가장 긴 변의 제곱이 나머지 두 변의 제곱의 합보다 크면 어떤 삼각형인지 쓰시오.`, `둔각삼각형`);
  if (type===9) return createProblem('2-2-3', diff, `피타고라스 정리가 성립하는 삼각형은 어떤 삼각형인지 쓰시오.`, `직각삼각형`);
  if (type===10) return createProblem('2-2-3', diff, `세 변의 길이가 4, 5, 6인 삼각형은 예각삼각형, 직각삼각형, 둔각삼각형 중 어느 것인지 쓰시오.`, `예각삼각형`);
  if (type===11) return createProblem('2-2-3', diff, `직각이등변삼각형의 세 변의 길이의 비를 쓰시오.`, `$1:1:\\sqrt{2}$`);
  if (type===12) return createProblem('2-2-3', diff, `세 변의 길이가 5, 12, 13일 때, 직각과 마주보는 변(빗변)의 길이를 구하시오.`, `13`);
  if (type===13) return createProblem('2-2-3', diff, `대각선의 길이가 10인 직사각형의 가로가 8일 때, 세로의 길이를 구하시오.`, `6`);
  if (type===14) return createProblem('2-2-3', diff, `원점 $(0,0)$과 점 $(a,b)$ 사이의 거리 공식을 쓰시오.`, `$\\sqrt{a^2+b^2}$`);
  if (type===15) return createProblem('2-2-3', diff, `피타고라스 정리는 어느 시대 어느 나라 수학자의 이름에서 유래했는가?`, `고대 그리스`);
  if (type===16) return createProblem('2-2-3', diff, `직각삼각형에서 두 변의 길이가 각각 9와 12일 때, 빗변의 길이를 구하시오.`, `15`);
  if (type===17) return createProblem('2-2-3', diff, `좌표평면 위의 점 $(0,0)$과 $(5,12)$ 사이의 거리를 구하시오.`, `13`);
  if (type===18) return createProblem('2-2-3', diff, `한 변의 길이가 2인 정사각형의 대각선 길이를 $\\sqrt{}$ 기호를 사용하여 나타내시오.`, `$2\\sqrt{2}$`);
  if (type===19) return createProblem('2-2-3', diff, `밑변이 6, 높이가 8인 직각삼각형의 빗변의 길이를 구하시오.`, `10`);
  if (type===20) return createProblem('2-2-3', diff, `직각삼각형에서 빗변의 길이가 13이고 한 직각변의 길이가 5일 때, 다른 직각변의 길이를 구하시오.`, `12`);
  if (type===21) return createProblem('2-2-3', diff, `세 변의 길이가 7, 24, 25인 삼각형이 직각삼각형인지 피타고라스 정리를 이용해 판단하시오.`, `직각삼각형이다.`);
  if (type===22) return createProblem('2-2-3', diff, `직각삼각형의 두 직각변 길이가 각각 $a, b$일 때, 빗변의 길이를 나타내는 공식을 쓰시오.`, `$\\sqrt{a^2+b^2}$`);
  return createProblem('2-2-3', diff, `피타고라스 정리를 이용하여 삼각형이 직각삼각형인지 판별하는 방법을 간단히 설명하시오.`, `가장 긴 변의 제곱과 나머지 두 변의 제곱의 합을 비교한다.`);
};

const pythMid = (): Problem => {
  const diff = 'Mid';
  const type = randomInt(1, 23);
  
  if (type===1) { const s = 4; return createProblem('2-2-3', diff, `한 변의 길이가 ${s}인 정삼각형의 높이를 구하시오.`, `$2\\sqrt{3}$`); }
  if (type===2) { return createProblem('2-2-3', diff, `세 변의 길이가 5, 5, 6인 이등변삼각형의 넓이를 구하시오.`, `12`); }
  if (type===3) return createProblem('2-2-3', diff, `두 점 $(1,1)$과 $(4,5)$ 사이의 거리를 구하시오.`, `5`);
  if (type===4) return createProblem('2-2-3', diff, `대각선의 길이가 $4\\sqrt{2}$인 정사각형의 한 변의 길이를 구하시오.`, `4`);
  if (type===5) { return createProblem('2-2-3', diff, `가로 3, 세로 4, 높이 12인 직육면체의 공간 대각선의 길이를 구하시오.`, `13`); }
  if (type===6) { return createProblem('2-2-3', diff, `밑면의 반지름이 3이고 높이가 4인 원뿔의 모선 길이를 구하시오.`, `5`); }
  if (type===7) return createProblem('2-2-3', diff, `가로 4, 세로 8인 직사각형을 대각선으로 접었더니 겹친 부분이 이등변삼각형이 되었다. 이 삼각형의 밑변의 길이가 대각선 길이와 같은지 O, X로 답하시오.`, `X`);
  if (type===8) return createProblem('2-2-3', diff, `정삼각형의 한 변의 길이가 $a$일 때 넓이를 구하는 공식을 쓰시오.`, `$\\frac{\\sqrt{3}}{4}a^2$`);
  if (type===9) return createProblem('2-2-3', diff, `길이 10m인 사다리가 벽에 기대어 있다. 사다리 밑이 벽에서 6m 떨어져 있을 때, 사다리가 닿는 높이를 구하시오.`, `8m`);
  if (type===10) return createProblem('2-2-3', diff, `대각선이 서로 수직인 마름모에서, 두 대각선의 길이가 각각 6과 8일 때 마름모의 넓이를 구하시오.`, `24`);
  if (type===11) return createProblem('2-2-3', diff, `한 모서리의 길이가 6인 정육면체의 공간 대각선의 길이를 구하시오.`, `$6\\sqrt{3}$`);
  if (type===12) return createProblem('2-2-3', diff, `세 변의 길이가 $x, x+1, x+2$인 직각삼각형에서 $x$의 값을 구하시오.`, `3`);
  if (type===13) return createProblem('2-2-3', diff, `폭이 10인 직사각형 종이를 접어서 겹친 부분이 정삼각형이 되게 할 때, 정삼각형 한 변의 길이를 구하시오.`, `$\\frac{20\\sqrt{3}}{3}$`);
  if (type===14) return createProblem('2-2-3', diff, `가로 6, 대각선 10인 직사각형의 넓이를 구하시오.`, `48`);
  if (type===15) return createProblem('2-2-3', diff, `직각삼각형에서 빗변의 길이가 15이고 한 직각변의 길이가 9일 때, 다른 직각변의 길이를 구하시오.`, `12`);
  if (type===16) return createProblem('2-2-3', diff, `좌표평면 위의 점 $(2,3)$과 $(8,6)$ 사이의 거리를 구하시오.`, `$3\\sqrt{5}$`);
  if (type===17) return createProblem('2-2-3', diff, `정삼각형의 한 변의 길이가 10일 때, 높이의 길이를 구하시오.`, `$5\\sqrt{3}$`);
  if (type===18) return createProblem('2-2-3', diff, `직사각형의 가로가 5cm, 대각선이 13cm일 때 세로의 길이를 구하시오.`, `12cm`);
  if (type===19) return createProblem('2-2-3', diff, `밑면이 직사각형(3cm × 4cm)이고 높이가 12cm인 직육면체에서, 한 꼭짓점에서 대각선 맞은편 꼭짓점까지의 거리를 구하시오.`, `13cm`);
  if (type===20) return createProblem('2-2-3', diff, `밑면 반지름이 5cm이고 모선의 길이가 13cm인 원뿔의 높이를 구하시오.`, `12cm`);
  if (type===21) return createProblem('2-2-3', diff, `좌표평면 위에서 원점을 중심으로 하고 반지름이 5인 원 위의 한 점의 좌표를 예로 들어 하나 쓰시오.`, `(5,0) 등`);
  if (type===22) return createProblem('2-2-3', diff, `직각삼각형의 세 변의 길이가 7, 24, 25일 때, 이 삼각형의 넓이를 구하시오.`, `84`);
  return createProblem('2-2-3', diff, `피타고라스 정리를 이용해 직육면체의 겉면을 따라 가는 최단 거리를 구할 때, 어떤 도형을 평면에 펼쳐서 생각해야 하는지 쓰시오.`, `전개도`);
};

const pythHigh = (): Problem => {
  const diff = 'High';
  const type = randomInt(1, 23);

  if (type===1) return createProblem('2-2-3', diff, `밑면의 반지름이 3, 높이가 $4\\pi$인 원기둥이 있다. 밑면의 한 점 A에서 옆면을 따라 한 바퀴 감아 A 바로 위의 점 B까지 가는 최단 거리를 구하시오.`, `$10\\pi$`);
  if (type===2) return createProblem('2-2-3', diff, `좌표평면 위의 두 점 $A(0, 1)$, $B(4, 3)$과 $x$축 위의 점 $P$에 대하여 $AP+BP$의 최솟값을 구하시오.`, `$4\\sqrt{2}$`);
  if (type===3) return createProblem('2-2-3', diff, `한 모서리의 길이가 6인 정사면체의 높이를 구하시오.`, `$2\\sqrt{6}$`);
  if (type===4) return createProblem('2-2-3', diff, `세 변의 길이가 13, 13, 10인 이등변삼각형의 넓이를 구하시오.`, `60`);
  if (type===5) return createProblem('2-2-3', diff, `두 원의 반지름이 3, 5이고 중심거리가 10일 때, 공통외접선의 길이를 구하시오.`, `$\\sqrt{96}$`);
  if (type===6) return createProblem('2-2-3', diff, `삼각형 $ABC$의 세 변의 중선의 길이의 제곱의 합과 세 변의 길이의 제곱의 합 사이의 관계(파푸스 중선 정리)의 공식을 쓰시오.`, `$AB^2+AC^2=2(AM^2+BM^2)$`);
  if (type===7) return createProblem('2-2-3', diff, `유클리드의 방법으로 피타고라스 정리를 증명할 때, 직각에서 수선을 내린 양쪽 사각형의 넓이는 각각 무엇의 넓이와 같은지 설명하시오.`, `빗변의 제곱 정사각형을 나눈 직사각형`);
  if (type===8) return createProblem('2-2-3', diff, `가로, 세로, 높이가 3, 4, 5인 직육면체의 겉면을 따라 꼭짓점에서 대각선 반대편 꼭짓점까지 가는 최단 거리를 구하시오.`, `$\\sqrt{74}$`);
  if (type===9) return createProblem('2-2-3', diff, `세 변의 길이가 $3, 4, a$인 삼각형이 둔각삼각형이 되기 위한 $a$의 범위를 구하시오. (단, $a$가 가장 긴 변)`, `$5 < a < 7$`);
  if (type===10) return createProblem('2-2-3', diff, `정삼각형 내부의 한 점 $P$에서 세 변에 이르는 거리가 각각 1, 2, 3일 때, 이 정삼각형의 높이를 구하시오.`, `6`);
  if (type===11) return createProblem('2-2-3', diff, `개미가 원기둥 컵의 바깥쪽 벽을 타고 반대편 가장자리까지 가는 최단 경로 문제에서, 전개도를 어떻게 이용하는지 설명하시오.`, `옆면을 펼쳐 직사각형으로 만든 뒤 직선 거리 계산`);
  if (type===12) return createProblem('2-2-3', diff, `밑면 반지름 5, 모선 13인 원뿔의 부피를 구하시오.`, `$100\\pi$`);
  if (type===13) return createProblem('2-2-3', diff, `한 변의 길이가 2인 정육면체를 자른 단면이 정육각형이 될 때, 그 정육각형의 넓이를 구하시오.`, `$3\\sqrt{3}$`);
  if (type===14) return createProblem('2-2-3', diff, `직각삼각형의 빗변 위에 그려진 반원의 넓이는 나머지 두 변 위에 그려진 반원의 넓이의 합과 같은지 O, X로 답하고, 이유를 간단히 설명하시오.`, `O`);
  if (type===15) return createProblem('2-2-3', diff, `좌표평면 위의 점 $(x, y)$가 원 $x^2+y^2=25$ 위를 움직일 때, 이 점에서 원점까지의 거리가 항상 일정함을 설명하시오.`, `반지름이 5인 원이므로 항상 5`);
  if (type===16) return createProblem('2-2-3', diff, `길이가 10m인 사다리를 벽에 기대었을 때, 밑부분이 벽에서 2m씩 멀어질 때마다 닿는 높이가 어떻게 변하는지 피타고라스 정리를 사용하여 일반식으로 나타내시오.`, `높이 = \\sqrt{10^2-x^2}`);
  if (type===17) return createProblem('2-2-3', diff, `밑면 반지름이 r, 높이가 h인 원기둥의 대각선(밑면의 한 점과 윗면의 대각선 반대점 사이 거리)의 길이를 r, h로 나타내시오.`, `$\\sqrt{(2r)^2+h^2}$`);
  if (type===18) return createProblem('2-2-3', diff, `정사각형의 한 꼭짓점에서 대각선 맞은편 꼭짓점까지의 거리는 한 변의 길이가 1일 때 얼마인지, 그리고 한 변의 길이가 a일 때 일반식을 쓰시오.`, `$\\sqrt{2}, a\\sqrt{2}$`);
  if (type===19) return createProblem('2-2-3', diff, `직각삼각형의 세 변 길이가 9, 40, 41일 때, 이 삼각형의 넓이와 둘레를 구하시오.`, `넓이 180, 둘레 90`);
  if (type===20) return createProblem('2-2-3', diff, `정사면체의 한 모서리 길이가 a일 때, 높이와 한 면의 높이를 각각 a로 나타내시오.`, `높이 = \\frac{\\sqrt{6}}{3}a 등`);
  if (type===21) return createProblem('2-2-3', diff, `원뿔 전개도에서 중심각과 모선, 밑면 반지름 사이의 관계를 피타고라스 정리와 닮음을 이용해 설명하시오.`, `모선이 빗변 역할`);
  if (type===22) return createProblem('2-2-3', diff, `두 직육면체의 모서리 길이의 비가 1:3일 때, 대각선 길이의 비와 부피의 비를 각각 구하시오.`, `대각선 1:3, 부피 1:27`);
  return createProblem('2-2-3', diff, `공간도형에서 피타고라스 정리가 어떻게 확장되어 사용되는지, 예를 들어 한 가지 경우를 들어 설명하시오.`, `직육면체 대각선 등`);
};

// ==========================================
// UNIT 4: Probability (확률)
// ==========================================

const probLow = (): Problem => {
  const diff = 'Low';
  const type = randomInt(1, 23);

  if (type===1) return createProblem('2-2-4', diff, `주사위 한 개를 던질 때, 짝수의 눈이 나올 확률을 구하시오.`, `1/2`);
  if (type===2) return createProblem('2-2-4', diff, `동전 2개를 동시에 던질 때, 모두 앞면이 나올 확률을 구하시오.`, `1/4`);
  if (type===3) return createProblem('2-2-4', diff, `1부터 10까지의 자연수가 적힌 10장의 카드 중에서 한 장을 뽑을 때, 3의 배수가 나올 확률을 구하시오.`, `3/10`);
  if (type===4) return createProblem('2-2-4', diff, `두 사람이 가위바위보를 할 때 비길 확률을 구하시오.`, `1/3`);
  if (type===5) return createProblem('2-2-4', diff, `어떤 사건이 일어날 확률을 $p$라고 할 때, $p$의 범위를 쓰시오.`, `$0 \\le p \\le 1$`);
  if (type===6) return createProblem('2-2-4', diff, `반드시 일어나는 사건의 확률을 쓰시오.`, `1`);
  if (type===7) return createProblem('2-2-4', diff, `절대로 일어나지 않는 사건의 확률을 쓰시오.`, `0`);
  if (type===8) return createProblem('2-2-4', diff, `사건 A가 일어날 확률이 $p$일 때, A가 일어나지 않을 확률을 $p$를 사용하여 나타내시오.`, `$1-p$`);
  if (type===9) return createProblem('2-2-4', diff, `A, B, C, D 네 사람이 한 줄로 설 때, A가 맨 앞에 설 확률을 구하시오.`, `1/4`);
  if (type===10) return createProblem('2-2-4', diff, `서로 다른 주사위 2개를 던질 때, 눈의 합이 2가 될 확률을 구하시오.`, `1/36`);
  if (type===11) return createProblem('2-2-4', diff, `동전 1개를 던질 때 뒷면이 나올 확률을 구하시오.`, `1/2`);
  if (type===12) return createProblem('2-2-4', diff, `주사위 1개를 던질 때 7 이상의 눈이 나올 확률을 쓰시오.`, `0`);
  if (type===13) return createProblem('2-2-4', diff, `남학생 2명, 여학생 3명 중에서 1명을 뽑을 때 남학생이 뽑힐 확률을 구하시오.`, `2/5`);
  if (type===14) return createProblem('2-2-4', diff, `서로 다른 동전 3개를 던질 때 가능한 모든 경우의 수를 구하시오.`, `8`);
  if (type===15) return createProblem('2-2-4', diff, `주사위 한 개를 던질 때 소수(2,3,5)가 나올 확률을 구하시오.`, `1/2`);
  if (type===16) return createProblem('2-2-4', diff, `주머니에 빨간 공 2개와 파란 공 3개가 있을 때, 한 개를 꺼져 빨간 공이 나올 확률을 구하시오.`, `2/5`);
  if (type===17) return createProblem('2-2-4', diff, `동전 2개를 동시에 던질 때, 적어도 한 개는 앞면이 나올 확률을 구하시오.`, `3/4`);
  if (type===18) return createProblem('2-2-4', diff, `1부터 5까지의 번호가 적힌 카드 5장 중에서 한 장을 뽑을 때, 짝수가 나올 확률을 구하시오.`, `2/5`);
  if (type===19) return createProblem('2-2-4', diff, `사건 A의 확률이 0.25일 때, A가 일어나지 않을 확률을 구하시오.`, `0.75`);
  if (type===20) return createProblem('2-2-4', diff, `주사위 1개를 던질 때, 1 또는 2가 나올 확률을 구하시오.`, `1/3`);
  if (type===21) return createProblem('2-2-4', diff, `단일 시행에서 일어날 수 있는 모든 경우의 수 중에서 어떤 사건이 일어나는 경우의 수를 세어 확률을 구하는 방법을 무엇이라고 하는지 쓰시오.`, `고전적 확률`);
  if (type===22) return createProblem('2-2-4', diff, `어떤 사건 A의 확률이 0.6일 때, 사건 A 또는 A가 아닌 사건 중 둘 중 하나가 일어나는 확률을 쓰시오.`, `1`);
  return createProblem('2-2-4', diff, `동전 1개를 두 번 던질 때, 두 번 모두 같은 면이 나올 확률을 구하시오.`, `1/2`);
};

const probMid = (): Problem => {
  const diff = 'Mid';
  const type = randomInt(1, 23);
  
  if (type===1) { const t = 7; return createProblem('2-2-4', diff, `서로 다른 두 개의 주사위를 동시에 던질 때, 두 눈의 수의 합이 ${t}일 확률을 구하시오.`, `1/6`); }
  if (type===2) return createProblem('2-2-4', diff, `동전 3개를 동시에 던질 때, 적어도 한 개는 앞면이 나올 확률을 구하시오.`, `7/8`);
  if (type===3) return createProblem('2-2-4', diff, `5명의 학생 중에서 대표 2명을 뽑을 때, A가 대표 중 한 명으로 뽑힐 확률을 구하시오.`, `2/5`);
  if (type===4) return createProblem('2-2-4', diff, `주머니 속에 흰 공 3개, 검은 공 2개가 들어 있다. 공을 한 개 꺼내 확인하고 다시 넣는 시행을 2번 반복할 때, 2번 모두 흰 공이 나올 확률을 구하시오.`, `9/25`);
  if (type===5) return createProblem('2-2-4', diff, `주머니 속에 흰 공 3개, 검은 공 2개가 들어 있다. 공을 한 개 꺼내 확인하고 다시 넣지 않을 때, 2번 모두 흰 공이 나올 확률을 구하시오.`, `3/10`);
  if (type===6) return createProblem('2-2-4', diff, `1부터 20까지의 카드가 있다. 4의 배수 또는 9의 배수를 뽑을 확률을 구하시오.`, `7/20`);
  if (type===7) return createProblem('2-2-4', diff, `4등분 된 원판 과녁에 화살을 쏠 때, 특정한 한 구역을 맞힐 확률을 구하시오.`, `1/4`);
  if (type===8) return createProblem('2-2-4', diff, `부모님을 포함하여 4명이 일렬로 설 때, 부모님이 이웃하여 설 확률을 구하시오.`, `1/2`);
  if (type===9) return createProblem('2-2-4', diff, `내일 비가 올 확률이 0.3, 모레 비가 올 확률이 0.4이다. 이틀 모두 비가 오지 않을 확률을 구하시오.`, `0.42`);
  if (type===10) return createProblem('2-2-4', diff, `어떤 지역에서 이틀 동안 비가 올 확률이 각각 0.3, 0.4일 때, 이틀 중 하루만 비가 올 확률을 구하시오. (두 날의 비는 서로 독립이라고 가정)`, `0.46`);
  if (type===11) return createProblem('2-2-4', diff, `주사위 2개를 던져서 나온 눈의 수가 서로 같을 확률을 구하시오.`, `1/6`);
  if (type===12) return createProblem('2-2-4', diff, `남학생 3명, 여학생 2명을 한 줄로 세울 때, 여학생끼리 이웃하여 설 확률을 구하시오.`, `2/5`);
  if (type===13) return createProblem('2-2-4', diff, `시험에 A가 합격할 확률이 1/2, B가 합격할 확률이 1/3일 때, 두 사람 모두 불합격할 확률을 구하시오. (독립 시행)`, `1/3`);
  if (type===14) return createProblem('2-2-4', diff, `주사위 1개를 2번 던질 때, 첫 번째는 짝수, 두 번째는 홀수가 나올 확률을 구하시오.`, `1/4`);
  if (type===15) return createProblem('2-2-4', diff, `1부터 10까지의 수 중에서 서로 다른 두 수를 뽑아 더했을 때, 그 합이 9가 될 확률을 구하시오.`, `1/15`);
  if (type===16) return createProblem('2-2-4', diff, `문제 5개짜리 OX퀴즈에서 무작위로 답을 찍을 때, 정확히 3개를 맞힐 확률을 구하시오.`, `$\\binom{5}{3} (1/2)^5 = 10/32$`);
  if (type===17) return createProblem('2-2-4', diff, `한 상자에 흰 공 2개와 검은 공 3개가 있다. 공을 한 개 꺼낸 뒤 다시 넣고, 또 한 개를 꺼낼 때, 색이 서로 다르게 나올 확률을 구하시오.`, `6/25`);
  if (type===18) return createProblem('2-2-4', diff, `두 자리 자연수 중에서 십의 자리가 3인 수를 임의로 하나 고를 때, 그 수가 3의 배수일 확률을 구하시오.`, `1/3`);
  if (type===19) return createProblem('2-2-4', diff, `추를 두 번 던져서 나온 눈을 각각 a, b라고 할 때, a+b가 짝수일 확률을 구하시오.`, `1/2`);
  if (type===20) return createProblem('2-2-4', diff, `두 개의 서로 다른 주사위를 던질 때, 나오는 수의 곱이 6의 배수가 될 확률을 구하시오.`, `1/2`);
  if (type===21) return createProblem('2-2-4', diff, `주머니에 A, B, C, D 네 글자가 적힌 카드가 각각 1장씩 있다. 이 중 2장을 뽑아 순서대로 늘어놓을 때, 'AB'가 나올 확률을 구하시오.`, `1/12`);
  if (type===22) return createProblem('2-2-4', diff, `두 사건 A, B가 서로 배반 사건일 때, P(A∪B)를 P(A), P(B)로 나타내시오.`, `P(A)+P(B)`);
  return createProblem('2-2-4', diff, `서로 다른 4개의 공을 한 줄로 나열할 때, 특정한 한 공이 항상 가운데 두 자리에만 오는 경우의 수를 구하시오.`, `12가지`);
};

const probHigh = (): Problem => {
  const diff = 'High';
  const type = randomInt(1, 23);

  if (type===1) return createProblem('2-2-4', diff, `4개의 윷가락을 던질 때, 뒷면이 정확히 2개(개)가 나올 확률을 구하시오. (단, 등과 배가 나올 확률은 같다고 가정한다.)`, `3/8`);
  if (type===2) return createProblem('2-2-4', diff, `서로 다른 주사위 2개를 동시에 던질 때, 나오는 눈의 수의 차가 2 이하일 확률을 구하시오.`, `2/3`);
  if (type===3) return createProblem('2-2-4', diff, `주머니 A에는 흰 공 2개, 검은 공 3개가 들어있고, 주머니 B에는 흰 공 3개, 검은 공 1개가 들어있다. 두 주머니에서 각각 하나씩 꺼낼 때 둘 다 흰 공일 확률을 구하시오.`, `3/10`);
  if (type===4) return createProblem('2-2-4', diff, `A, B 두 사람이 가위바위보를 한 번 할 때, A가 이길 확률을 구하시오.`, `1/3`);
  if (type===5) return createProblem('2-2-4', diff, `1부터 9까지의 숫자가 적힌 카드 중에서 2장을 뽑아 두 자리 정수를 만들 때, 그 수가 3의 배수일 확률을 구하시오.`, `1/3`);
  if (type===6) return createProblem('2-2-4', diff, `명중률이 각각 0.8, 0.6인 두 사수가 동시에 표적을 쏠 때, 표적이 총알에 맞을 확률(적어도 한 명 명중)을 구하시오.`, `0.92`);
  if (type===7) return createProblem('2-2-4', diff, `10개의 제비 중 당첨 제비가 3개 있다. A가 먼저 하나 뽑고, 다시 넣지 않은 상태에서 B가 하나 뽑을 때 B가 당첨될 확률을 구하시오.`, `3/10`);
  if (type===8) return createProblem('2-2-4', diff, `한 개의 주사위를 두 번 던져서 나온 눈의 수를 차례로 $a, b$라 할 때, 곱 $ab$가 짝수일 확률을 구하시오.`, `3/4`);
  if (type===9) return createProblem('2-2-4', diff, `0, 1, 2, 3, 4의 숫자가 적힌 5장의 카드 중 2장을 뽑아 두 자리 자연수를 만들 때, 그 수가 짝수일 확률을 구하시오.`, `5/8`);
  if (type===10) return createProblem('2-2-4', diff, `세 사람이 가위바위보를 할 때, 승부가 나지 않을(비길) 확률을 구하시오.`, `1/3`);
  if (type===11) return createProblem('2-2-4', diff, `주사위 2개를 던져 나온 눈의 합이 5의 배수(5 또는 10)가 될 확률을 구하시오.`, `7/36`);
  if (type===12) return createProblem('2-2-4', diff, `길이가 2, 4, 6, 8인 막대 4개 중 3개를 골라 삼각형을 만들 수 있을 확률을 구하시오.`, `1/4`);
  if (type===13) return createProblem('2-2-4', diff, `어떤 야구 선수의 타율이 0.3이다. 이 선수가 3번 타석에 들어서서 적어도 한 번 안타를 칠 확률을 구하시오.`, `0.657`);
  if (type===14) return createProblem('2-2-4', diff, `주머니에 빨간 공 4개, 파란 공 6개가 있다. 연속해서 2개를 꺼낼 때 두 공의 색이 서로 다를 확률(비복원)을 구하시오.`, `8/15`);
  if (type===15) return createProblem('2-2-4', diff, `어떤 시험에서 5지 선다형 문제 3개를 임의로 찍어서 모두 맞힐 확률을 구하시오.`, `1/125`);
  if (type===16) return createProblem('2-2-4', diff, `서로 다른 3개의 주사위를 던질 때, 나오는 눈의 수가 모두 다를 확률을 구하시오.`, `5/9`);
  if (type===17) return createProblem('2-2-4', diff, `어떤 학생이 객관식 4지 선다형 문제 5개를 전부 찍어서 풀었다. 3개 이상 맞힐 확률을 구하시오.`, `계산형`);
  if (type===18) return createProblem('2-2-4', diff, `한 상자에 노란 공 4개, 파란 공 3개, 빨간 공 3개가 있다. 이 중 2개를 동시에 꺼낼 때, 같은 색 공이 나올 확률을 구하시오.`, `19/45`);
  if (type===19) return createProblem('2-2-4', diff, `서로 독립인 두 사건 A, B에 대해 P(A)=0.4, P(B)=0.5일 때, A∩B, A∪B의 확률을 각각 구하시오.`, `0.2, 0.7`);
  if (type===20) return createProblem('2-2-4', diff, `어떤 공장이 있는 날에 고장을 일으킬 확률이 0.1이고, 서로 다른 두 날의 고장은 독립이라 할 때, 이틀 연속으로 고장이 한 번도 일어나지 않을 확률을 구하시오.`, `0.81`);
  if (type===21) return createProblem('2-2-4', diff, `3개의 서로 다른 주사위를 던질 때, 나온 눈의 합이 9가 될 확률을 구하시오.`, `1/9`);
  if (type===22) return createProblem('2-2-4', diff, `동전을 4번 던질 때, 앞면이 나오는 횟수가 뒷면이 나오는 횟수보다 많을 확률을 구하시오.`, `5/16`);
  return createProblem('2-2-4', diff, `확률이 0.2인 사건 A와 0.5인 사건 B가 서로 배반일 때, A∪B의 확률과 A'∩B의 확률을 구하시오.`, `0.7, 0.4`);
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