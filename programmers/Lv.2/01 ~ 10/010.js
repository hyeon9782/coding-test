// 영어 끝말잇기
function solution(n, words) {
  const usedWords = new Set();
  let prevWord = words[0];

  for (let i = 1; i < words.length; i++) {
    const currentWord = words[i];

    if (
      usedWords.has(currentWord) ||
      prevWord[prevWord.length - 1] !== currentWord[0]
    ) {
      const playerNumber = (i % n) + 1;
      const turn = Math.ceil((i + 1) / n);

      return [playerNumber, turn];
    }

    usedWords.add(prevWord);
    prevWord = currentWord;
  }

  return [0, 0];
}
