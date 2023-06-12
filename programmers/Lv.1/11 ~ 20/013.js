// 하샤드 수
function solution(x) {
  const arr = (x + "").split("");
  let sum = 0;
  arr.forEach((item) => {
    if (item !== "-") {
      sum += Number(item);
    }
  });
  console.log(x % sum === 0);
  return x % sum === 0;
}
