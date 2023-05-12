// const input = ["10 4200", "1", "5", "10", "50", "100", "500", "1000", "5000", "10000", "50000"]


let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, k] = input[0].split(" ").map(Number)

let arr =[]
for(let i=1; i <= n; i++){
    arr.push(Number(input[i]));
}

arr.sort((a, b) => b - a)

// console.log(arr);

let num = 0;
let sum = k
arr.forEach(item => {
    if (sum / item >= 1) {
        // console.log("테스트");
        num += Math.floor(sum / item);
        sum -= item * Math.floor(sum / item);
        
    }
})

console.log(num);