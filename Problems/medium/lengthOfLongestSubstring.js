///////////////BRUTE FORCE

// const lengthOfLongestSubstring = function (s) {
//   let curr = {},
//     x = "",
//     highestLength = 0;
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < s.length; j++) {
//       x += s[j];
//       if (x.length > highestLength) {
//           highestLength = x.length;
//         }
//       if (x.includes(s[j + 1]) || s[j + 1] === undefined) {
//         curr[x] = x.length;
//         x = "";
//         break;
//       }
//     }
//   }
//   return highestLength;
// };

// console.log(lengthOfLongestSubstring("pwwkeew"));
// console.log(lengthOfLongestSubstring("abcacbb"));
// console.log(lengthOfLongestSubstring("bbbbbbb"));

///////////////OPTIMAL SOLUTION///////Sliding Window

var lengthOfLongestSubstring = function (s) {
  const obj = new Map();
  let back = 0,
    res = 0;
  for (let i = 0; i < s.length; i++) {
    const exist = obj.get(s[i]);
    if (exist !== undefined && back <= exist) {
      back = exist + 1;
    }
    obj.set(s[i], i);
    res = Math.max(res, i - back + 1);
    // console.log(`res:${res}, back:${back}, front:${i}, exist:${exist}`, obj);
  }
  console.log(res);
  return res;
};
lengthOfLongestSubstring("pwwkeew");
lengthOfLongestSubstring("abba");
lengthOfLongestSubstring("abcabcdefgh");
lengthOfLongestSubstring("bbbbbbb");
lengthOfLongestSubstring("");
