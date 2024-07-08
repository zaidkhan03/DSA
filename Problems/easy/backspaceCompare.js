const s = "ab#c";
const t = "ad#c";

//brute

var backspaceCompare = function (s, t) {
  const buildStack = (str) => {
    const stack = [];
    for (let char of str) {
      if (char === "#" && stack.length > 0) {
        stack.pop();
      } else if (char !== "#") {
        stack.push(char);
      }
    }
    return stack;
  };

  const stack1 = buildStack(s);
  const stack2 = buildStack(t);

  return stack1.join("") === stack2.join("");
};
console.log(backspaceCompare(s, t));

//optimal
// var backspaceCompare = function (s, t) {
//   function validChar(str, index) {
//     let backspaceCount = 0;
//     while (index >= 0) {
//       if (str[index] === "#") {
//         backspaceCount++;
//       } else if (backspaceCount === 0) {
//         return index;
//       } else {
//         backspaceCount--;
//       }
//       index--;
//     }
//     return index;
//   }

//   let i = s.length - 1,
//     j = t.length - 1;

//   while (i >= 0 || j >= 0) {
//     i = validChar(s, i);
//     j = validChar(t, j);

//     if (i >= 0 && j >= 0) {
//       if (s[i] !== t[j]) {
//         return false;
//       }
//     } else if (i >= 0 || j >= 0) {
//       return false;
//     }
//     i--;
//     j--;
//   }
//   return true;
// };

// console.log(backspaceCompare(s, t));
