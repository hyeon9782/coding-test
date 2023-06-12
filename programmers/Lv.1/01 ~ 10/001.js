// 평균 구하기
function solution(arr) {
  const sum = arr.reduce((a, b) => a + b);
  var answer = sum / arr.length;
  return answer;
}
