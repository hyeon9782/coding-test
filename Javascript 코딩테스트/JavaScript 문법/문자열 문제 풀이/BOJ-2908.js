let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const str1 = input[0].split(' ')[0]
const str2 = input[0].split(" ")[1];

function reverse(str){
    return Number(str.split("").reverse().join(""));
}

console.log(Math.max(reverse(str1), reverse(str2)));