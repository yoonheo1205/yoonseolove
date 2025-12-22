// Random integer between min and max (inclusive)
export const randomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Random item from array
export const randomItem = <T>(arr: T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)];
};

// Greatest Common Divisor
export const gcd = (a: number, b: number): number => {
  return b === 0 ? a : gcd(b, a % b);
};

// Simplify fraction
export const simplifyFraction = (numerator: number, denominator: number): [number, number] => {
  if (denominator === 0) return [0, 0];
  const common = gcd(Math.abs(numerator), Math.abs(denominator));
  const sign = (numerator * denominator >= 0) ? 1 : -1;
  return [Math.abs(numerator) / common * sign, Math.abs(denominator) / common];
};

// Format as LaTeX fraction or integer
export const formatFraction = (num: number, den: number): string => {
  if (den === 0) return 'Undefined';
  if (den === 1) return `${num}`;
  if (num === 0) return '0';
  
  // Simplify
  const [sNum, sDen] = simplifyFraction(num, den);
  if (sDen === 1) return `${sNum}`;
  return `\\frac{${sNum}}{${sDen}}`;
};

// Random non-zero integer
export const randomNonZero = (range: number): number => {
  let val = 0;
  while (val === 0) {
    val = randomInt(-range, range);
  }
  return val;
};

export const toSubscript = (n: number) => {
  return `_{${n}}`;
};

export const shuffleArray = <T>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

// --- New Helpers ---

// Get factors of a number
export const getFactors = (n: number): number[] => {
  const factors = [];
  for(let i=1; i<=Math.abs(n); i++) {
    if(n % i === 0) factors.push(i);
  }
  return factors;
};

// Check if finite decimal (denominator only has prime factors 2 and 5)
export const isFiniteDecimal = (den: number): boolean => {
  let d = den;
  while (d % 2 === 0) d /= 2;
  while (d % 5 === 0) d /= 5;
  return d === 1;
};

// LaTeX polynomial formatter
export const polyStr = (coeffs: number[], vars: string[]): string => {
  // Simple helper for ax + by = c style
  let str = '';
  coeffs.forEach((c, i) => {
    if (c === 0) return;
    const v = vars[i] || '';
    const sign = c > 0 ? (str ? '+' : '') : '-';
    const absC = Math.abs(c);
    const val = (absC === 1 && v) ? '' : absC;
    str += `${sign}${val}${v}`;
  });
  return str || '0';
};