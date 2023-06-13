// 이진 변환 반복하기
// 이진 변환 반복하기

function solution(s) {
  let str = s;
  let num = 0;
  let zero = 0;
  while (str != 1) {
    const length = str.replace(new RegExp("0", "g"), "").length;
    zero += str.length - length;
    str = length.toString(2);
    num++;
  }

  return [num, zero];
}
