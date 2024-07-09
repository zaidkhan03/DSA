const nums = [4, 1, 2, 1, 2];

// var singleNumber = function (nums) {
//   let count = {};
//   nums.forEach((num) => {
//     count[num] = (count[num] || 0) + 1;
//   });
//   for (let num in count) {
//     if (count[num] === 1) {
//       return parseInt(num);
//     }
//   }
// };

//optimal using XOR

var singleNumber = function (nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res = nums[i] ^ res;
  }
  return res;
};
console.log(singleNumber(nums));
