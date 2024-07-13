const BinarySearchTree = require("../../BinarySearchTree/BinarySearchTree");
const root = new BinarySearchTree();

root.insert(3);
root.insert(9);
root.insert(20);
root.insert(null);
root.insert(null);
root.insert(15);
root.insert(7);

//DFS Approach
// var isSymmetric = function (root) {
//   function dfs(left, right) {
//     if (!left && !right) return true;
//     if (!left || !right) return false;
//     return (
//       left.val === right.val &&
//       dfs(left.left, right.right) &&
//       dfs(left.right, right.left)
//     );
//   }
//   return dfs(root.left, root.right);
// };

//BFS Approach
// var isSymmetric = function (root) {
//   if (!root) return true;
//   let queue = [[root.left, root.right]];
//   while (queue.length > 0) {
//     let [left, right] = queue.shift();
//     if (!left && !right) {
//       continue;
//     }
//     if (!left || !right || left.val !== right.val) {
//       return false;
//     }
//     queue.push([left.right, right.left]);
//     queue.push([left.left, right.right]);
//   }

//   return true;
// };

console.log(isSymmetric(root));
