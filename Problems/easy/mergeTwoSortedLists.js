const LinkedList = require("../../LinkedList/linkedList");
const l1 = new LinkedList();
const l2 = new LinkedList();

l1.prepend(15);
l1.prepend(10);
l1.prepend(4);

l2.prepend(20);
l2.prepend(8);
l2.prepend(6);
l2.prepend(1);

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

  while (v1 && v2) {
    if (v1.value > v2.value) {
      currNode.next = new Node(v2.value);
      currNode = currNode.next;

      v2 = v2.next;
    } else {
      currNode.next = new Node(v1.value);
      currNode = currNode.next;
      v1 = v1.next;
    }
  }
  if (v1) {
    currNode.next = v1;
  }
  if (v2) {
    currNode.next = v2;
  }

  return dummy.next;
};

console.log(mergeTwoLists(l1, l2));
