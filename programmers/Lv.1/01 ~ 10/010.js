// 정수 제곱근 판별
function solution(n) {
  console.log(Math.sqrt(n));
  return Math.sqrt(n) % 1 === 0 ? (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1) : -1;
}
