// 다음 큰 숫자
function solution(n) {
  var answer = 0;
  const one = oneLength(n);
  while (true) {
    const newNum = ++n;
    if (one === oneLength(newNum)) {
      answer = newNum;
      break;
    }
  }
  return answer;
}

function oneLength(num) {
  return num
    .toString(2)
    .split("")
    .filter((item) => item === "1").length;
}
