// JadenCase 문자열 만들기
function solution(s) {
  var answer = "";
  const arr = s.split(" ").map((item) => {
    if (item[0] / 1 !== NaN) {
      return item
        .split("")
        .map((val, index) => {
          if (index === 0) return val.toUpperCase();
          else return val.toLowerCase();
        })
        .join("");
    } else {
      return item
        .split("")
        .map((val, index) => {
          if (index === 0) return val;
          else return val.toLowerCase();
        })
        .join("");
    }
  });
  return arr.join(" ");
}
