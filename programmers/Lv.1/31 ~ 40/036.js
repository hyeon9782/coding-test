// 예산

function solution(d, budget) {
  var answer = 0;

  d.sort((a, b) => a - b).forEach((item, _, self) => {
    budget -= item;
    if (budget >= 0) answer++;
  });
  return answer;
}
