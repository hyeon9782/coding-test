// 행렬의 덧셈
function solution(arr1, arr2) {
  const newArr = arr1.map((inner, i) => {
    return inner.map((item, j) => {
      return item + arr2[i][j];
    });
  });
  return newArr;
}
