// H-인덱스
function solution(citations) {
  citations.sort((a, b) => b - a); // 내림차순으로 정렬

  let h = 0;
  while (h < citations.length && citations[h] > h) {
    h++;
  }

  return h;
}
