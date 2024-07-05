// const root = [3, 9, 20, null, null, 15, 7]; //Expected:true
// const root = [1, 2, 2, 3, null, null]; //Expected:true
// const root = []; //Expected:true
// const root = [3, 9, 20, null, null, 15, 7, 14, 7]; //Expected:false
// const root = [1, 2, 2, 3, null, null, 3, 4, null, null, 4]; //Expected:false
// const root = [1, null, 2]; //Expected:true

const BinarySearchTree = require("../../BinarySearchTree/BinarySearchTree");
const root = new BinarySearchTree();

root.insert(3);
root.insert(9);
root.insert(20);
root.insert(null);
root.insert(null);
root.insert(15);
root.insert(7);

var isBalanced = function (root) {
  const height = (root) => {
    if (!root) {
      return 0;
    }
    const left = height(root.left);
    const right = height(root.right);

    if (Math.abs(left - right) > 1) return -1;
    if (left === -1 || right === -1) return -1;

    return Math.max(left, right) + 1;
  };
  return height(root) !== -1;
};

console.log(isBalanced(root));
