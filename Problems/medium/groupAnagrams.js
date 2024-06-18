const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

//Sort Method
// var groupAnagrams = function (strs) {
//   const obj = {};
//   for (let i = 0; i < strs.length; i++) {
//     const word = strs[i];
//     const sorted = (word) => {
//       return [...word].sort((a, b) => a.localeCompare(b)).join("");
//     };
//     const sortedWord = sorted(word);
//     if (sortedWord in obj) {
//       obj[sortedWord].push(word);
//     } else {
//       obj[sortedWord] = [word];
//     }
//   }

//   const newArr = [];
//   for (let item in obj) {
//     newArr.push(obj[item]);
//   }
//   return newArr;
// };

//Frequency Method
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let word = strs[i];
    let sorted = word.split("").sort().join("");

    if (map.has(sorted)) {
      map.get(sorted).push(word);
    } else {
      map.set(sorted, [word]);
    }
  }
  return Array.from(map.values());
};
console.log(groupAnagrams(strs));
