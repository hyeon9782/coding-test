// 예상 대진표
function solution(N, A, B) {
  let round = 1;

  while (true) {
    // A와 B가 만날 때까지 진행
    if (Math.abs(A - B) === 1 && Math.min(A, B) % 2 === 1) {
      break;
    }

    // 다음 라운드에서의 번호 계산
    A = Math.ceil(A / 2);
    B = Math.ceil(B / 2);
    round++;
  }

  return round;
}
