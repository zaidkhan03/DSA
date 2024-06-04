const s = "anagramss"; //true
const t = "nagaramww";

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

var isAnagram = function (s, t) {
  map = {};
  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]] += 1;
    } else {
      map[s[i]] = 1;
    }

    if (map[t[i]]) {
      map[t[i]] -= 1;
    } else {
      map[t[i]] = 1;
    }
  }
  //   for (let j = 0; j < t.length; j++) {

  //   }
  console.log(map);
  return map;
};

console.log(isAnagram(s, t));
