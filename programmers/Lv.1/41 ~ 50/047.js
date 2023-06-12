// 가장 가까운 같은 글자
function solution(s) {
  const arr = [];
  const answer = s.split("").map((item, _, self) => {
    if (arr.includes(item)) {
      arr.push(item);
      const idx = arr.lastIndexOf(item);
      return idx - arr.lastIndexOf(item, idx - 1);
    } else {
      arr.push(item);
      return -1;
    }
  });
  return answer;
}
