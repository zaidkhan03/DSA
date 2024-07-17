var sortedArrayToBST = function (nums) {
  const insertNodes = (start, end) => {
    if (start > end) {
      return null;
    }
    const mid = Math.floor((start + end) / 2);
    const node = new TreeNode(nums[mid]);
    node.left = insertNodes(start, mid - 1);
    node.right = insertNodes(mid + 1, end);
    return node;
  };

  return insertNodes(0, nums.length - 1);
};
