// const input = ["5", "2 4 -10 4 -9"]

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number)

const arr2 = [...new Set(arr)];

arr2.sort((a, b) => a - b);

let myMap = new Map()
for (let i = 0; i < n; i++){
    myMap.set(arr2[i], i)
}

let answer = ""
for (x of arr) answer += myMap.get(x) + " "

console.log(answer);

// console.log(arr2); 뭔소리야! 왜 사전 씀?