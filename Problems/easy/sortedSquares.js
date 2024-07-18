const nums = [-5, -4, -2, 0, 1, 2, 3, 10];
var sortedSquares = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let newArr = [];

  while (l <= r) {
    if (Math.abs(nums[l]) > Math.abs(nums[r])) {
      newArr.push(nums[l] ** 2);
      l += 1;
    } else {
      newArr.push(nums[r] ** 2);
      r -= 1;
    }
  }

  return newArr.reverse();
};

console.log(sortedSquares(nums));
