const s = "anagram"; //true
const t = "nagaram";

// const s = "rat"; //false
// const t = "car";

// BRUTE

// var isAnagram = function (s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }
//   const sort = (s) => {
//     return [...s].sort((a, b) => a.localeCompare(b)).join("");
//   };
//   s = sort(s);
//   t = sort(t);
//   return s === t;
// };

//OPTIMAL
var isAnagram = function (s, t) {
  let map = new Map();
  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map.get(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  for (let j = 0; j < s.length; j++) {
    const char = t[j];
    if (map.get(char)) {
      map.set(char, map.get(char) - 1);
      if (map.get(char) === 0) {
        map.delete(char);
      }
    } else {
      return false;
    }
  }

  return map.size === 0;
};

console.log(isAnagram(s, t));
