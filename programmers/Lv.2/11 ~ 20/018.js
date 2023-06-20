// 귤 고르지
function solution(k, tangerine) {
  let answer = 0;
  // 서로 다른 크기의 귤을 최소화하고 싶다
  // 한 상자에 담으려는 귤의 개수 k
  // 귤의 크기를 담은 배열 tangerine
  // 귤 k개를 고를 때 크기가 다른 종류의 수의 최솟값을 return

  const obj = {};

  // obj 초기화
  tangerine.forEach((item) => (obj[item] = 0));

  // console.log(obj)

  // 같은 크기의 개수로만 k개만큼 채우고
  // 다 채우면 Set을 통해 중복값을 제거하면 종류의 수

  // 귤 크기 별로 숫자 세기
  tangerine.map((item) => {
    obj[item] += 1;
  });

  // obj의 values를 기준으로 내림차순 정렬
  const arr = Object.values(obj).sort((a, b) => b - a);

  // console.log(obj)
  // console.log(arr)

  let sum = 0;
  arr.forEach((item) => {
    if (k <= sum) return;
    sum += item;
    answer++;
  });
  return answer;
}
