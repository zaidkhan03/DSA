//////////Optimal

// const s = "(){}[}";
// const s = "()[]{}";
// const s = "()(]";
const s = "{[]}";
// const s = "(){}}{";
// const s = "([)]"; //false
// const s = "(]]"; //false
// const s = ""; //false

////1
const isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const lastChar = stack[stack.length - 1];

    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }
      if (
        (char === ")" && lastChar === "(") ||
        (char === "}" && lastChar === "{") ||
        (char === "]" && lastChar === "[")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
console.log(isValid(s));
