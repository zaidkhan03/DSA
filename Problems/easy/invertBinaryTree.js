const BinarySearchTree = require("../../BinarySearchTree/BinarySearchTree");

const tree = new BinarySearchTree();
tree.insert(4);
tree.insert(2);
tree.insert(7);
tree.insert(1);
tree.insert(3);
tree.insert(6);
tree.insert(9);

var invertTree = function (root) {
  return root;
};

console.log(invertTree(tree.root));
