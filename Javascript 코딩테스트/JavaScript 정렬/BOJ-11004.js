let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// const input = ["5 2", "4 1 2 3 5"]

const [n, seq] = input[0].split(" ").map(Number)
const arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b)


console.log(arr[seq - 1]);