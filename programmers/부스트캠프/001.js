// 자연수가 들어있는 배열 arr가 매개변수로 주어집니다. 배열 arr안의 숫자들 중에서 앞에 있는
// 숫자들부터 뒤에 중복되어 나타나는 숫자를 중복 횟수를 계산해서 배열로 return하도록 solution
// 함수를 완성해주세요. 만약 중복되는 숫자가 없다면 배열에 -1을 채워서 return 하세요.

// 입출력 예 #1 arr=[1,2,3,3,3,3,4,4]에서 3은 4번, 4는 2번씩 나타나므로 [4,2]를 반환
// 입출력 예 #2 arr=[3,2,4,4,2,5,2,5,5]이면 2가 3회, 4가 2회, 5가 3회 나타나므로 [3, 2, 3]을 반환
// 입출력 예 #3 arr=[3,5,7,9,1]에서 중복해서 나타내는 숫자는 없으므로 [-1] 반환

console.log(solution([3, 2, 4, 4, 2, 5, 2, 5, 5]));

function solution(arr) {
  const mySet = new Set([...arr]);

  const newArr = [...mySet].map(
    (item) => arr.filter((val) => val === item).length
  );

  return newArr.filter((v) => v !== 1).length > 0
    ? newArr.filter((v) => v !== 1)
    : [-1];
}

// 1. 이중 for문
// 2. set으로 중복 제거 후 filter로
