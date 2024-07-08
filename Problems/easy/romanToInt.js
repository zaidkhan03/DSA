const s = "MCMXCIV";
var romanToInt = function (s) {
  const dictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let i = 0;
  while (i < s.length) {
    if (i < s.length - 1 && dictionary[s[i]] < dictionary[s[i + 1]]) {
      result += dictionary[s[i + 1]] - dictionary[s[i]];
      i += 2;
    } else {
      result += dictionary[s[i]];
      i += 1;
    }
  }
  return result;
};
console.log(romanToInt(s));
