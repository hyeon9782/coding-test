let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// const input1 = ["3", "29", "38", "12", "57", "74", "40", "85", "61"]

const max = Math.max(...input);

console.log(max);
console.log(input.indexOf(String(max)) + 1);