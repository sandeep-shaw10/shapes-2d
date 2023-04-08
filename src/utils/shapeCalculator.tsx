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


function calculateRhombus(diagonal1: number, diagonal2: number): { side: number, angle1: number, angle2: number, perimeter: number, area: number } {
  const side = Math.sqrt((diagonal1/2) ** 2 + (diagonal2/2) ** 2);
  const perimeter = side * 4;
  const angle1 = Math.atan2(diagonal2, diagonal1 - diagonal2) * 180 / Math.PI;
  const angle2 = Math.atan2(diagonal1, diagonal2 - diagonal1) * 180 / Math.PI;
  const area = (diagonal1 * diagonal2) / 2;
  return { side, angle1, angle2, perimeter, area };
}


function calculateParallelogram(base: number, adjacentSide: number, height: number): { angle1: number, angle2: number, diagonal1: number, diagonal2: number, area: number, perimeter: number } {
  const angle1 = (Math.asin(height / adjacentSide) * (180 / Math.PI));
  const angle2 = 180 - angle1;
  const area = base * height;
  const perimeter = 2 * (base + adjacentSide);
  const diagonal1 = Math.sqrt(Math.pow(base,2) + Math.pow(adjacentSide,2) - 2*base*adjacentSide*Math.cos(angle1*(Math.PI/180)))
  const diagonal2 = Math.sqrt(Math.pow(base,2) + Math.pow(adjacentSide,2) - 2*base*adjacentSide*Math.cos(angle2*(Math.PI/180)))
  return { angle1, angle2, diagonal1, diagonal2, area, perimeter };
}



export { 
  triangleArea,
  findDiagonal,
  calculateTriangleAngles,
  calculateAngles,
  calculateApothem,
  calculateNGonArea,
  calculateTriangleRadii,
  calculateRhombus,
  calculateParallelogram
}