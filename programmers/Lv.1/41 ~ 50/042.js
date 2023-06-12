// 숫자 문자열과 영단어
function solution(s) {
  const arr = [
    { word: "zero", number: 0 },
    { word: "one", number: 1 },
    { word: "two", number: 2 },
    { word: "three", number: 3 },
    { word: "four", number: 4 },
    { word: "five", number: 5 },
    { word: "six", number: 6 },
    { word: "seven", number: 7 },
    { word: "eight", number: 8 },
    { word: "nine", number: 9 },
  ];

  arr.forEach(
    (item) => (s = s.replace(new RegExp(item.word, "g"), item.number + ""))
  );

  return +s;
}
