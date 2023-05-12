// const input = ["5", "3 1 4 3 2"]

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0])
const arr = input[1].split(" ").map(Number)

let min = 0;
let sum = 0;
arr.sort((a, b) => a - b).forEach(item => {
    sum += item;
    min += sum;
})

// for(let i=0; i <= n; i++){
//     min += arr[i]
// }



// console.log(arr);

console.log(min);