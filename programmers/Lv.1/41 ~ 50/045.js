// 두 개 뽑아서 더하기
function solution(numbers) {
  const mySet = new Set();
  numbers.forEach((item, index, self) => {
    const newArr = numbers.filter((_, i) => index !== i);
    newArr.forEach((val) => {
      mySet.add(item + val);
    });
  });
  return Array.from(mySet).sort((a, b) => a - b);
}
