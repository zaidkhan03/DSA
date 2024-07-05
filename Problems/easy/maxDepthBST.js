//root = [3,9,20,null,null,15,7]
//root =[1,null,2]
const BinarySearchTree = require("../../BinarySearchTree/BinarySearchTree");
const root = new BinarySearchTree();

root.insert(1);
root.insert(null);
root.insert(2);

var maxDepth = function (root) {
  function getHeight(node) {
    if (!node) {
      return 0;
    }
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  }
  return getHeight(root);
};
console.log(maxDepth(root));
