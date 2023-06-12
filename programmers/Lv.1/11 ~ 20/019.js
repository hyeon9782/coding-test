// 음양 더하기
function solution(absolutes, signs) {
  const arr = absolutes.map((item, index) => (signs[index] ? item : item * -1));

  return arr.reduce((a, b) => a + b);
}
