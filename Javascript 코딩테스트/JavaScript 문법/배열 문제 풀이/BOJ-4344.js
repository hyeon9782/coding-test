// const input = ["5", "5 50 50 70 80 100", "7 100 95 90 80 70 60 50"]

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const testCases = Number(input[0]);
for (let t = 1; t <= testCases; t++){
    let data = input[t].split(" ").map(Number);
    let n = data[0]; // 첫 번째 수는 데이터의 개수
    let summary = 0; // n개의 점수에 대하여 평균 계산
    for (let i = 1; i <= n; i++){
        summary += data[i];
    }
    let average = summary / n;
    let cnt = 0;
    for (let i = 1; i <= n; i++){
        if(data[i] > average) cnt += 1;
    }
    console.log(`${(cnt / n * 100).toFixed(3)}%`);
}

