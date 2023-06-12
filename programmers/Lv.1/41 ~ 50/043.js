// 문자열 내 마음대로 정렬하기
function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    else if (a[n] === b[n]) return a.localeCompare(b);
    else return -1;
  });
}
