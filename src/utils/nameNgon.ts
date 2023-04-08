// https://en.wikipedia.org/wiki/Polygon#:~:text=An%20n%2Dgon%20is%20a,triangle%20is%20a%203%2Dgon. 

function upto20(n: number): string {
  const value = [
    '',
    '',
    'Tri',
    'Tetra',
    'Penta',
    'Hexa',
    'Hepta',
    'Octa',
    'Nona',
    'Deca',
    'Undeca',
    'Dodeca',
    'Triskaideca',
    'Tetradeca',
    'Pentadeca',
    'Hexadeca',
    'Heptadeca',
    'Octadeca',
    'Enneadeca',
    'Icosa',
  ];
  return `${value[n-1]}gon`
}


function upto100(n: number): string {
  if(n === 100) return 'Hectogon'
  const tens = ['Icosi', 'Triaconta', 'Tetraconta', 'Pentaconta', 'Hexaconta', 'Heptaconta', 'Octaconta', 'Enneaconta']
  const fixed = 'kia'
  const ones = ['', 'henna', 'di', 'tri', 'tetra', 'penta', 'hexa', 'hepta', 'octa', 'ennea']
  const v1 = Math.floor(n/10)
  const v2 = n % 10
  return `${tens[v1-2]}${v2 ? fixed : ''}${ones[v2]}gon`
}

function nameNgon(n: number): string {
  if(n <= 20){
    return upto20(n)
  }else if(n >= 21 && n <= 100){
    return upto100(n)
  }else{
    return `${n}-gon`
  }
}


  
export default nameNgon