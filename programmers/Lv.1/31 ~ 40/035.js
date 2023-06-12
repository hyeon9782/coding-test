// 이상한 문자 만들기
function solution(s) {
  const newArr = s.split(" ").map((item) => {
    return item
      .split("")
      .map((val, index) => {
        return index % 2 === 0 ? val.toUpperCase() : val.toLowerCase();
      })
      .join("");
  });
  return newArr.join(" ");
}
