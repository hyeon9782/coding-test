// const input = ["5", "3 4", "1 1", "1 -1", "2 2", "3 3"]

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

let arr = []
for (let i=1; i <= n; i++){
    const [x, y] = input[i].split(" ").map(Number)
    arr.push({ x, y });
}

// console.log(arr);

arr.sort((a, b) => {
    if (a.x === b.x) return a.y - b.y
    else return a.x - b.x
})

// console.log(arr);
let answer = ""
arr.forEach(item => {
    answer += String(item.x) + " " + String(item.y) + "\n";
})

console.log(answer);
