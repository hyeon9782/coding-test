// 가운데 글자 가져오기
function solution(s) {
  let answer = "";
  let temp = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    //짝수
    if (s.length === 2) {
      answer = s;
    } else {
      answer = s.slice(temp - 1, temp + 1);
    }
  } else {
    //홀수
    if (s.length === 1) {
      answer = s;
    } else {
      answer = s.slice(temp, temp + 1);
    }
  }

  return answer;
}
