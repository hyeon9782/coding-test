// 콜라 문제

function solution(a, b, n) {
  let empty = 0;
  let bottle = n;
  while (true) {
    if (bottle % a === 0) {
      empty += (bottle / a) * b;
      bottle = (bottle / a) * b;
    } else {
      empty += Math.floor(bottle / a) * b;
      bottle = Math.floor(bottle / a) * b + (bottle % a);
    }
    if (bottle < a) break;
  }

  return empty;
}
