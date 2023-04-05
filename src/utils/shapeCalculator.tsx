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
  findDiagonal
}