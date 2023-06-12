// 제일 작은 수 제거하기
function solution(arr) {
  const min = Math.min(...arr);
  const newArr = arr.filter((item) => item !== min);
  if (newArr.length === 0) newArr.push(-1);
  return newArr;
}
