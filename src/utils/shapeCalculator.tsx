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


export { 
  triangleArea,
  findDiagonal,
  calculateTriangleAngles
}