// 행렬의 곱셈
function solution(arr1, arr2) {
  var answer = [];
  const row = arr1.length;
  const col = arr2[0].length;
  const inner = arr2.length;

  for (let i = 0; i < row; i++) {
    answer.push(Array(col).fill(0));
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      for (let k = 0; k < inner; k++) {
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }
  return answer;
}
