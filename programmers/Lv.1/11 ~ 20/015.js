// 콜라츠 추측
function solution(num) {
  if (num === 1) return 0;
  let answer = 0;
  let number = num;
  while (answer < 500) {
    if (number % 2 === 0) number = number / 2;
    else number = number * 3 + 1;

    answer++;

    if (number === 1) break;
  }
  return answer === 500 ? -1 : answer;
}
