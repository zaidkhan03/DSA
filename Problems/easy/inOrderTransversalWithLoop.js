var inorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  const stack = [];
  const res = [];
  let curr = root;
  while (stack.length > 0 || curr !== null) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    res.push(curr.val);
    curr = curr.right;
  }
  return res;
};
