const BinarySearchTree = require("../../BinarySearchTree/BinarySearchTree");
const root = new BinarySearchTree();

root.insert(3);
root.insert(9);
root.insert(20);
root.insert(null);
root.insert(null);
root.insert(15);
root.insert(7);

var diameterOfBinaryTree = function (root) {
  let result = [0];

  if (!root.left && !root.right) {
    return 0;
  }

  const recursiveFunc = (node) => {
    if (!node) {
      return 0;
    }
    let leftHeight = recursiveFunc(node.left);
    let rightHeight = recursiveFunc(node.right);
    result[0] = Math.max(result[0], leftHeight + rightHeight);
    return Math.max(leftHeight, rightHeight) + 1;
  };

  recursiveFunc(root);
  return result[0];
};

console.log(diameterOfBinaryTree(root));
