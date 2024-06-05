const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSubArray = function (nums) {
  let map = {},
    res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (res < 0) {
      console.log(nums[i]);
      res = 0;
    }
    if (res < res + nums[i] && nums[i + 1] < 0) {
      res = 0;
    }
    res += nums[i];
  }
  return `result is ${res}`;
};

console.log(maxSubArray(nums));
