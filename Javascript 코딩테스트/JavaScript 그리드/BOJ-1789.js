// const input = ["200"]

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);

let i = 0;
let sum = 0
while (sum <= num) {
  i += 1;
  sum += i;
}

console.log(i - 1);