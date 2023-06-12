// 같은 숫자는 싫어
function solution(arr) {
  var answer = [];
  let num = "";
  answer = arr.filter((item) => {
    if (num === item) return false;
    else {
      num = item;
      return true;
    }
  });

  return answer;
}
