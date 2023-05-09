// const input = ["3", "40 80 60"]

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
const array = input[1].split(" ").map(Number)

const max = Math.max(...array);

let updated = [];
for (let i = 0; i < n; i++) { // 수정된 원소 하나씩 저장
updated.push((array[i] / max) * 100);
}
// 배열에 포함된 원소의 평균 출력
console.log(updated.reduce((a, b) => a + b) / n);
