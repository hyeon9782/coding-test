let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = input[0];

const num = "9999";

// 중복된 숫자가 나온 만큼 세트의 개수가 추가된다.
// 단, 6또는 9가 나올 경우 1세트로 2개를 표현할 수 있다.
// 하지만 6또는 9를 앞에서 이미 썼다면 사용 불가능

const arr = Array.from(Array(10), (_, i) => i);

console.log(arr);

let arr2 = num.split("").map(Number);
let set = 0;

while (arr2.length !== 0) {
  // arr2의 값이 arr에 있지 않으면 반환
  arr2 = arr2.filter((v) => !arr.includes(v));
  set++;
}

console.log(set);
