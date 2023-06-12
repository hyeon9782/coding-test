// 추억 점수
function solution(name, yearning, photo) {
  var answer = [];
  // 그리워하는 사람의 이름 name
  // 각 사람별 그리움 점수 yearning
  // 각 사진에 찍힌 인물의 이름 photo
  photo.forEach((item, index) => {
    let score = 0;
    for (let i = 0; i < name.length; i++) {
      if (item.includes(name[i])) {
        score += yearning[i];
      }
    }
    answer.push(score);
  });

  return answer;
}
