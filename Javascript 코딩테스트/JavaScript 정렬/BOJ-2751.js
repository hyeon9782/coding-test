let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// const input = ["5", "5", "4", "3"]

const num = input[0]
const array = []

for (let i = 1; i <= num; i++) {
  array.push(input[i]);
}

array.sort((a, b) => a - b);

let answer = "";
array.forEach((item, index) => answer += array[index] + '\n');

console.log(answer);