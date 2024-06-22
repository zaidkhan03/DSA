var containsDuplicate = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(num)) return true;
    map.set(num, i);
  }
  return false;
};
