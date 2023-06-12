// K번째 수
function solution(array, commands) {
  const arr = [];
  commands.forEach((item) => {
    let newArr = [...array];
    arr.push(
      newArr.slice(item[0] - 1, item[1]).sort((a, b) => a - b)[item[2] - 1]
    );
  });

  return arr;
}
