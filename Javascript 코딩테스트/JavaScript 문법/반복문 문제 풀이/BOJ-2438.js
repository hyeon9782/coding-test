// const input = ["5"];

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
let star = "";
for (let i = 0; i < n; i++){
    
    for (let j = 0; j <= i; j++){
        star += "*";
    }
    star += "\n"
}
console.log(star);