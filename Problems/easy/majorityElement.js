// Hash Map
function majorityElement(nums) {
  const collection = {};

  for (let num of nums) {
    if (collection[num] != null) {
      collection[num]++;
    } else {
      collection[num] = 1;
    }
  }

  let result = null;

  for (let num in collection) {
    if (result === null || collection[num] > collection[result]) {
      result = num;
    }
  }

  return parseInt(result);
}

// Optimal

function majorityElement(nums) {
  let majority = null;
  let votes = 0;

  for (let i = 0; i < nums.length; i++) {
    if (votes === 0) {
      majority = nums[i];
      votes = 1;
    } else if (nums[i] === majority) {
      votes += 1;
    } else {
      votes -= 1;
    }
  }

  return majority;
}
