// 올바른 괄호
function solution(s) {
  let answer = true;
  const stack = [];

  if (s[s.length - 1] === "(" || s[0] === ")") {
    answer = false;
  }

  if (answer) {
    for (const str of s) {
      if (str === "(") {
        stack.push(str);
      } else if (str === ")") {
        if (stack[stack.length - 1] === "(") {
          stack.pop();
        } else {
          answer = false;
          console.log("끝!");
          break;
        }
      }
    }
  }

  if (stack.length > 0) {
    answer = false;
  }

  return answer;
}
