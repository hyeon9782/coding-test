// 문자열 내 p와 y의 개수
function solution(str) {
  const arr = str.split("");
  const pNum = arr.filter((item) => item.toUpperCase() === "P").length;
  const yNum = arr.filter((item) => item.toUpperCase() === "Y").length;

  return pNum === yNum || (pNum === 0 && yNum === 0) ? true : false;
}
