let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

// const input = ["3", "1", "2"]
let arr = input[0].split(' ').map(Number);

arr.sort((a, b) => a - b);

let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + " ";
}

console.log(answer);