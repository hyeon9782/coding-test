// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  var answer = [];
  const newArr = arr
    .filter((item) => {
      return (item / divisor) % 1 === 0;
    })
    .sort((a, b) => a - b);
  if (newArr.length === 0) newArr.push(-1);
  return newArr;
}
