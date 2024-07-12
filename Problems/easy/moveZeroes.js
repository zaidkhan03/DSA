const nums = [1, 2, 0, 0, 0, 8, 12, 5, 0];
var moveZeroes = function (nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (index !== i) {
        nums[index] = nums[i];
        nums[i] = 0;
      }
      index++;
    }
  }
  return;
};
console.log(moveZeroes(nums));
