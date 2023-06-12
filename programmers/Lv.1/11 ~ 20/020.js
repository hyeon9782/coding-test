// 없는 숫자 더하기
function solution(numbers) {
  const arr = [];
  for (i = 0; i < 10; i++) {
    if (numbers.indexOf(i) === -1) arr.push(i);
  }

  return arr.reduce((cur, aur) => cur + aur, 0);
}
