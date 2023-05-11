// const input = ["13", "but", "i", "wont", "hesitate", "no", "more", "no", "more", "it", "cannot", "wait", "im", "your"]

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

let arr = []
for (let i=1; i <= n; i++){
    arr.push(input[i])
}

// console.log(arr);

arr.sort((a, b) => {
    if (a.length === b.length) return a < b ? -1 : 1 
    else return a.length - b.length
})

// console.log(arr);

const mySet = new Set(arr)

// console.log(mySet);

let answer = ""
for (const i of mySet) {
    answer += i + '\n'
}

console.log(answer);