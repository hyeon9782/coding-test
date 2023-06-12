// 최대공약수와 최소공배수
function solution(n, m) {
  let max = 1;
  let min = 1;
  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      max = i;
    }
  }
  while (true) {
    if (min % n === 0 && min % m === 0) break;
    min++;
  }
  return [max, min];
}
