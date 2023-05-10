let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = input[0];

const array = [];
for (let i=1; i <= num; i++){
    array.push(input[i])
}

array.sort((a, b) => a - b)

array.forEach(item => console.log(item))



