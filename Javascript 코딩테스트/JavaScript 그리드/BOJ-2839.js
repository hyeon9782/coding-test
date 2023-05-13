const input = ["6"]

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const kg = Number(input[0]);

let num = 0;
let rest = kg;

const arr = [5 , 3]

arr.forEach(item => {
    if (rest / item >= 1 && ) {
        num += Math.floor(rest / item);
        
        rest -= item * Math.floor(rest / item);

        console.log(rest);
    }   
})

for(let i=0; i < 2; i++){
    if ()
}

// 3kg 와 5kg의 봉지를 가지고 있다
// 설탕 N kg을 최대한 적은 봉지를 사용하여 배달해야한다.
// 6kg을 받으면 5kg 1개 쓰고 1kg이 남

console.log(rest === 0 ? num : -1);