// 자릿수 더하기
function solution(n) {
  var answer = 0;
  for (const s of String(n)) {
    answer += Number(s);
  }
  return answer;
}
