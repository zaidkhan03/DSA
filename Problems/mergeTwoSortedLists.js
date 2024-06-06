const LinkedList = require("../LinkedList/linkedList");
const l1 = new LinkedList();
const l2 = new LinkedList();

l1.prepend(4);
l1.prepend(4);
l1.prepend(1);

l2.prepend(4);
l2.prepend(3);
l2.prepend(1);

// console.log(l1.head);
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
var mergeTwoLists = function (list1, list2) {
  let v1 = list1.head,
    v2 = list2.head,
    dummy = new Node(),
    currNode = dummy;
  while (v1 !== null || v2 !== null) {
    let x = v1 ? v1.value : null;
    let y = v2 ? v2.value : null;

    if (x > y) {
      if (y !== null) {
        currNode.next = new Node(y);
        currNode = currNode.next;
      }
      if (x !== null) {
        currNode.next = new Node(x);
        currNode = currNode.next;
      }
    } else {
      if (x !== null) {
        currNode.next = new Node(x);
        currNode = currNode.next;
      }
      if (y !== null) {
        currNode.next = new Node(y);
        currNode = currNode.next;
      }
    }
    v1 = v1 ? v1.next : null;
    v2 = v2 ? v2.next : null;
  }
  return dummy.next;
};

console.log(mergeTwoLists(l1, l2));
