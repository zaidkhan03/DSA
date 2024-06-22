const BinarySearchTree = require("../../BinarySearchTree/BinarySearchTree");
const tree = new BinarySearchTree();

//       10
//   5         15   ///Input
// 3     7

//       10
//   15         5   ///output
//           7     3

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
// levelOrder Search approach
// var invertTree = function (root) {
//   if (root === null) return root;
//   const queue = [];
//   queue.push(root);
//   while (queue.length) {
//     let curr = queue.shift();
//     if (curr) {
//       [curr.left, curr.right] = [curr.right, curr.left];
//       queue.push(curr.right, curr.left);
//     }
//   }
//   return root;
// };

// preOrder Search approach
var invertTree = function (root) {
  if (root === null) return root;
  [root.left, root.right] = [root.right, root.left];
  // root.left = invertTree(root.right);
  invertTree(root.left);
  invertTree(root.right);
  // root.right=

  return root;
};

console.log(invertTree(tree.root));
