const BinarySearchTree = require("../../BinarySearchTree/BinarySearchTree");

const tree = new BinarySearchTree();
tree.insert(4);
tree.insert(2);
tree.insert(7);
tree.insert(1);
tree.insert(3);
tree.insert(6);
tree.insert(9);

// Breadth First Search approach
var invertTree = function (root) {
  if (root === null) return root;
  const queue = [];
  queue.push(root);
  while (queue.length) {
    let curr = queue.shift();
    if (curr) {
      [curr.left, curr.right] = [curr.right, curr.left];
      queue.push(curr.right, curr.left);
    }
  }
  return root;
};

console.log(invertTree(tree.root));
