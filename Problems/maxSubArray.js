const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const nums = [1]
// const nums = [-5, -4, -1, -7, -8];

///Optimal Sol
// const maxSubArray = function (nums) {
//   let curr = 0,
//     res = -Infinity;
//   for (let i = 0; i < nums.length; i++) {
//     curr += nums[i];
//     curr > res ? (res = curr) : null;
//     curr < 0 ? (curr = 0) : null;
//   }
//   return res;
// };

// console.log(maxSubArray(nums));

///Divide And Conquer
const maxSubArray = function (nums) {
  let curr = 0,
    res = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    curr += nums[i];
    curr > res ? (res = curr) : null;
    curr < 0 ? (curr = 0) : null;
  }
  return res;
};

console.log(maxSubArray(nums));
