class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    }
    if (root.value === value) {
      return true;
    }
    if (root.value > value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }
}

const tree = new BinarySearchTree();
// console.log(tree.isEmpty());
tree.insert(10);
tree.insert(15);
tree.insert(5);
tree.insert(1);
tree.insert(2);
tree.insert(1);
// console.log(tree);
// console.log(tree.search(tree.root, 5));

module.exports = BinarySearchTree;
