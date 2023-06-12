// 비밀지도

function solution(n, arr1, arr2) {
  var answer = [];
  // 한 변의 길이가 n인 정사각형 배열
  // ("") 또는 ("#")로 이루어져 있다.
  // 지도는 2개의 배열을 겹쳐야 한다.
  // 배열 둘중 하나에서 벽이면 전체 지도에서도 벽이다.
  // 배열 둘다 공백이면 전체 지도에서도 공백이다.
  // 배열에서 벽은 1 공백은 0이다.
  for (let i = 0; i < n; i++) {
    const strArr1 = conversion(arr1[i]);
    const strArr2 = conversion(arr2[i]);

    const newArr = strArr1.map((item, index) => {
      if (item !== "#" && strArr2[index] !== "#") return " ";
      else return "#";
    });

    answer.push(newArr.join(""));
  }

  function conversion(arr) {
    return arr
      .toString(2)
      .padStart(n, "0")
      .replace(new RegExp("0", "g"), " ")
      .replace(new RegExp("1", "g"), "#")
      .split("");
  }

  return answer;
}
