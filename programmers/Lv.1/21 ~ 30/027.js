// 부족한 금액 계산하기
function solution(price, money, count) {
  var answer = 0;
  let sum = 0;
  for (i = 1; i <= count; i++) {
    sum += price * i;
  }
  answer = sum - money;

  return answer > 0 ? answer : 0;
}
