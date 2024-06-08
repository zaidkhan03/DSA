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
// function maxCrossingSum(arr, left, mid, right) {
//   // Include elements on the left of mid
//   let sumLeft = -Infinity;
//   let total = 0;
//   for (let i = mid; i >= left; i--) {
//     total += arr[i];
//     if (total > sumLeft) {
//       sumLeft = total;
//     }
//   }
//   // Include elements on the right of mid
//   let sumRight = -Infinity;
//   total = 0;
//   for (let i = mid + 1; i <= right; i++) {
//     total += arr[i];
//     if (total > sumRight) {
//       sumRight = total;
//     }
//   }
//   // Return sum of elements on left and right of mid
//   return sumLeft + sumRight;
// }
// function maxSubarraySum(arr, left, right) {
//   // Base case: only one element
//   if (left === right) {
//     return arr[left];
//   }
//   // Find middle point
//   const mid = Math.floor((left + right) / 2);
//   // Return maximum of following three possible cases:
//   // a) Maximum subarray sum in left half
//   // b) Maximum subarray sum in right half
//   // c) Maximum subarray sum such that the subarray crosses the midpoint
//   const leftSum = maxSubarraySum(arr, left, mid);
//   const rightSum = maxSubarraySum(arr, mid + 1, right);
//   const crossSum = maxCrossingSum(arr, left, mid, right);

//   return Math.max(leftSum, rightSum, crossSum);
// }

// // Example usage
// const arr = [2, 3, 4, 5, 7];
// const n = arr.length;
// const maxSum = maxSubarraySum(arr, 0, n - 1);
// console.log(`Maximum subarray sum is ${maxSum}`);
