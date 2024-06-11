const nums = [-1, 0, 3, 5, 9, 12]; // Output: 4 --> 9 index is 4
const target = 9;

//Binary Search
// var search = function (nums, target) {
//   const recursiveFunc = (nums, target) => {
//     let index = nums.length - 1;
//     if (nums.length === 0) {
//       return -1;
//     }
//     if (nums[index] === target) {
//       return index;
//     } else {
//       nums.pop();
//       return recursiveFunc(nums, target);
//     }
//   };

//   return recursiveFunc(nums.slice(), target);
// };

// console.log(search(nums, target));

//Optimal using Loops

var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (right > left) {
    if (nums[left] === target) {
      return left;
    }
    if (nums[right] === target) {
      return right;
    }
    left++;
    right--;
  }

  return -1;
};
console.log(search(nums, target));
