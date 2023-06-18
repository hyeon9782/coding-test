// 괄호 회전하기
function solution(s) {
  var answer = 0;

  const brackets = ["()", "[]", "{}"];

  // 문자열 순회하면서 열기 괄호 나오면 반드시 나온 열기 괄호 만큼의
  // 닫기 괄호가 나와야 true를 리턴하는 함수

  function check(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
      const bracket = s[i];

      if (bracket === "(" || bracket === "[" || bracket === "{") {
        stack.push(bracket);
      } else {
        const prevBracket = stack.pop();
        if (!brackets.includes(prevBracket + bracket)) {
          return false;
        }
      }
    }

    if (stack.length > 0) {
      return false;
    }

    return true;
  }

  for (let i = 0; i < s.length; i++) {
    if (check(s)) answer++;
    s = s.slice(1) + s.charAt(0);
  }

  return answer;
}
