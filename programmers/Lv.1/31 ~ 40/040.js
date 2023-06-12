// 크기가 작은 부분 문자열

function solution(t, p) {
  var answer = 0;
  for (let i = 0; i < t.length; i++) {
    if (t.substr(i, p.length).length >= p.length) {
      if (Number(t.substr(i, p.length)) <= +p) answer++;
    }
  }
  return answer;
}
