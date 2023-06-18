// N개의 최소공배수
function solution(arr) {
  // 가장 큰 수의 배수가 나머지 요소들의 배수와 일치하는 수
  let num = 2;
  let bool = false;
  while (true) {
    const max = arr[arr.length - 1] * num;
    for (let i = 0; i < arr.length - 1; i++) {
      if (max % arr[i] === 0) bool = true;
      else {
        bool = false;
        break;
      }
    }

    if (bool) break;
    num++;
  }

  return arr[arr.length - 1] * num;
}
