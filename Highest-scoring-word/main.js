const letterMap = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26
}

function high(str) {
 const allScores = str.split(' ').map(word => {
   return word.split('').reduce((acc, letter) => {
    return acc + letterMap[letter];
   }, 0);
 });
 const index = allScores.indexOf(Math.max(...allScores));
 return str.split(' ')[index];
}

high('bintang');
