// const input = ["3", "21 Junkyu", "21 Dohyun", "20 Sunyoung"]

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0])

let arr = []
for (let i=1; i <= n; i++){
    const [age, name] = input[i].split(" ")
    arr.push({age, name, i})
}

// arr.sort((a, b) => {
//     if (a.age === b.age) return a.i - b.i 
//     else return a.age - b.age
// })

arr.sort((a, b) => a.age - b.age) // Node.js의 정렬은 기본적으로 stable


let answer = ""
arr.forEach(item => answer += `${item.age} ${item.name}\n`)
console.log(answer);