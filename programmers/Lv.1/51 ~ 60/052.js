// 명예의 전당 (1)

function solution(k, score) {
  var answer = [];
  const arr = [];
  score.map((item) => {
    arr.push(item);
    const newArr = arr.sort((a, b) => b - a).slice(0, k);
    answer.push(newArr[newArr.length - 1]);
    console.log(newArr[newArr.length - 1]);
  });
  return answer;
}
