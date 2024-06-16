const tree = require("../../BinarySearchTree/BinarySearchTree");
const root = new tree();
root.insert(6);
root.insert(2);
root.insert(8);
root.insert(0);
root.insert(4);
root.insert(7);
root.insert(9);
root.insert(3);
root.insert(5);
// root.insert(2);
// root.insert(1);
const p = 2;
const q = 4;
console.log(root.root);

//dfs approach
var lowestCommonAncestor = function (root, p, q) {
  const small = Math.min(p, q);
  const big = Math.max(p, q);

  const recursive = (node) => {
    if (!node) return null;

    if (node.value > big) {
      return recursive(node.left);
    }
    if (node.value < small) {
      return recursive(node.right);
    }
    return node.value;
  };
  return recursive(root);
};

console.log(lowestCommonAncestor(root.root, p, q));
