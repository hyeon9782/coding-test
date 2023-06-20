// 의상
function solution(clothes) {
  var answer = 1;
  // 코니는 동일한 옷 조합을 입을 수 없다.
  // 코니는 하루에 최소 한 개의 의상을 입는다.
  // 코니가 가진 의상들이 담긴 clothes를 입력
  // 서로 다른 옷의 조합의 수를 return

  // clothes는 [의상의 이름, 의상의 종류]로 이루어져 있음
  // 같은 이름의 의상은 존재하지 않음
  // 의상은 알파벳 소문자 또는 _로 이루어져 있음

  const obj = {};

  let duplication = 0;

  // 의상 종류 중복 개수 체크
  for (let i = 0; i < clothes.length; i++) {
    if (obj[clothes[i][1]]) {
      obj[clothes[i][1]]++;
    } else {
      obj[clothes[i][1]] = 1;
    }
  }

  for (let key in obj) {
    answer *= obj[key] + 1;
  }

  return answer - 1;
}
