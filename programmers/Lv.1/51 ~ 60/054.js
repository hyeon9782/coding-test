// 모의고사

function solution(answers) {
  var answer = [];
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const arr = [[...one], [...two], [...three]];
  let arr2 = [];
  let max = 0;

  for (let i = 0; i < 3; i++) {
    let j = -1;
    const newArr = answers.filter((item, index) => {
      if (arr[i].length <= index && index < answers.length) {
        j++;
        j = j % arr[i].length;
        return item === arr[i][j];
      }
      return item === arr[i][index];
    });

    if (newArr.length === max) {
      max = newArr.length;
      arr2.push(i + 1);
    } else if (newArr.length > max) {
      max = newArr.length;
      arr2 = [i + 1];
    }
  }

  return arr2;
}
