type TriangleAngles = {
  angleA: number;
  angleB: number;
  angleC: number;
};

function calculateTriangleAngles(a: number, b: number, c: number) {
  const cosC = (a * a + b * b - c * c) / (2 * a * b);
  const cosA = (b * b + c * c - a * a) / (2 * b * c);
  const cosB = (c * c + a * a - b * b) / (2 * c * a);
  const angleA = Math.acos(cosA) * (180 / Math.PI);
  const angleB = Math.acos(cosB) * (180 / Math.PI);
  const angleC = Math.acos(cosC) * (180 / Math.PI);
  return {
    angleA: +angleA.toFixed(2),
    angleB: +angleB.toFixed(2),
    angleC: +angleC.toFixed(2),
  };
}



function isTriangle(a: number, b: number, c: number): boolean {
  return a + b > c && b + c > a && c + a > b;
}
  
function triangleArea(a: number, b: number, c: number): number {
  if (!isTriangle(a, b, c)) {
      return -1
  }
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}


function findDiagonal(width: number, height: number): number {
  return Math.sqrt(width * width + height * height);
}

function calculateAngles(n: number): { interiorAngle: number, exteriorAngle: number } {
  let interiorAngle = -1;
  let exteriorAngle = -1;
  if (n < 3) return { interiorAngle, exteriorAngle }
  interiorAngle = (n - 2) * 180 / n;
  exteriorAngle = 360 / n;
  return { interiorAngle, exteriorAngle };
}

function calculateApothem(n: number, s: number): number {
  const radians = (2 * Math.PI) / n;
  return s / (2 * Math.tan(radians / 2));
}

function calculateNGonArea(n: number, sideLength: number): number {
  const perimeter = n * sideLength;
  const apothem = calculateApothem(n, sideLength);
  return 0.5 * perimeter * apothem;
}

function calculateTriangleRadii(a: number, b: number, c: number): { circumradius: number, inradius: number } {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  const circumradius = (a * b * c) / (4 * Math.sqrt(s * (s - a) * (s - b) * (s - c)));
  const inradius = area / s;
  return { circumradius, inradius };
}


export { 
  triangleArea,
  findDiagonal,
  calculateTriangleAngles,
  calculateAngles,
  calculateApothem,
  calculateNGonArea,
  calculateTriangleRadii
}