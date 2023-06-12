// 문자열 다루기 기본

function solution(s) {
  const arr = s.split("").map(Number);
  console.log(arr.length);
  return arr.length === 4 || arr.length === 6 ? !arr.includes(NaN) : false;
}
