// 숫자의 표현
function solution(n) {
  var answer = 0;
  let num = 0;
  const arr = Array.from(Array(n), (_, i) => i + 1);

  for (let j = 0; j < arr.length; j++) {
    for (let i = j; i <= n; i++) {
      num += arr[i];
      if (num === n) {
        answer++;
        break;
      } else if (num > n) {
        break;
      }
    }
    num = 0;
  }

  return answer;
}
