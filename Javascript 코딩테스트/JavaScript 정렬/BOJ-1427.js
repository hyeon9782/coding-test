// const input = ["2143"]

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let arr = []
for (const i of input[0]){
    arr.push(i)
}

arr.sort((a, b) => b - a)

console.log(arr.join(""));