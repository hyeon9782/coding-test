let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let input1 = ["5", "20 10 35 30 7"];

const list = input[1].split(" ");

console.log(Math.min(...list) + " " + Math.max(...list));