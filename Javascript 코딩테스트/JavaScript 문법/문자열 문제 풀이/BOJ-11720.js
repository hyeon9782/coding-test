let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const string = input[1];

let sum = 0;
for (const v of string) {
  sum += Number(v);
}

console.log(sum);