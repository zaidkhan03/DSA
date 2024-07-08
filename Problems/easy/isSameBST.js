const BinarySearchTree = require("../../BinarySearchTree/BinarySearchTree");
const p = new BinarySearchTree();
const q = new BinarySearchTree();

p.insert(10);
q.insert(10);
p.insert(5);
q.insert(5);
p.insert(15);
q.insert(15);
p.insert(3);
q.insert(3);
p.insert(7);
q.insert(7);
var isSameTree = function (p, q) {
  if (!p && !q) {
    return true;
  }
  if (!p || !q) {
    return false;
  }
  if (p.val === q.val) {
    return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
  } else {
    return false;
  }
};
console.log(isSameTree(p, q));
