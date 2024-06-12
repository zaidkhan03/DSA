const nums = [-1, 0, 3, 5, 6, 9]; // Output: 4 --> 9 index is 4
const target = 9;

//Binary Search --> Optimal 𝑂(log 𝑛) time complexity
var search = function (nums, target) {
  recursiveFunc = (start, end) => {
    if (start > end) {
      return -1;
    }
    const middle = Math.floor((start + end) / 2);

    if (nums[middle] < target) {
      return recursiveFunc(middle + 1, end);
    }
    if (nums[middle] > target) {
      return recursiveFunc(start, middle - 1);
    }
    if (nums[middle] === target) {
      return middle;
    }
  };

  return recursiveFunc(0, nums.length - 1);
};
console.log(Math.floor(7 / 2));
console.log(search(nums, target));

//Using Loops

// var search = function (nums, target) {
//   let left = 0,
//     right = nums.length - 1;

//   while (right > left) {
//     if (nums[left] === target) {
//       return left;
//     }
//     if (nums[right] === target) {
//       return right;
//     }
//     left++;
//     right--;
//   }

//   return -1;
// };
// console.log(search(nums, target));
