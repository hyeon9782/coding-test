// 멀리 뛰기
function solution(n) {
  // 칸의 수가 1일 경우 1을 반환
  if (n === 1) {
    return 1;
  }

  // 도달 방법의 개수를 저장하는 배열
  const dp = [0, 1, 2];

  // 도달 방법의 개수를 계산하여 배열에 저장
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  // 최종 도달 방법의 개수를 반환
  return dp[n];
}
