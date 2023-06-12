// 과일 장수

function solution(k, m, score) {
  var answer = 0;
  score.sort((a, b) => b - a);
  for (let i = 0; i < score.length; i += m) {
    const arr = score.slice(i, i + m);
    if (arr.length === m && Math.min(...arr) !== 0) {
      answer += arr[arr.length - 1] * m;
    }
  }

  return answer;
}
