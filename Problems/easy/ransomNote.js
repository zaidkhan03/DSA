const magazine = "abaadhsl";
const note = "aaabdsl";
var canConstruct = function (ransomNote, magazine) {
  const map = new Map();

  for (let char of magazine) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of ransomNote) {
    if (!map.get(char)) return false;
    map.set(char, map.get(char) - 1);
  }

  return true;
};
console.log(canConstruct(magazine, note));
