// 약수의 개수와 덧셈

function solution(left, right) {
  var answer = 0;
  let num = left;
  const arr = [];
  while (true) {
    if (num > right) break;
    let index = 1;
    let result = 0;
    while (index <= num) {
      if (num % index === 0) result += 1;
      index++;
    }

    answer += result % 2 === 0 ? num : -num;

    arr.push(num);
    num++;
  }

  return answer;
}
