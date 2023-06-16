// 최솟값 만들기
function solution(A, B) {
  let answer = 0;

  // A와 B를 각각 곱해서 총합을 구할 때 최소 값을 만들어야 한다.
  // A에서 제일 작은 값을 B에서 가장 큰 값으로 곱하면 될듯?

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}
