// const nums = [-100, -100, 0, 0, 3, 3];
// const nums = [-1, 0, 0, 0, 0, 3, 3];
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function (nums) {
  let num = -200;
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== num) {
      num = nums[i];
      nums[index] = nums[i];
      index += 1;
    }
  }

  console.log(nums);
  return index;
};
console.log(removeDuplicates(nums));
