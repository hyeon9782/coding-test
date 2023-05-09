// const input = ["3", "1 1", "12 34", "5 500"]

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const testCases = Number(input[0]);
let result = '';
for (let i = 1; i <= testCases; i++) {
    const array = input[i].split(" ").map(Number);
    result += array[0] + array[1] + '\n';
}

console.log(result); 