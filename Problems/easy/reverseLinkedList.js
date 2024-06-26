const LinkedList = require("../../LinkedList/LinkedList");
const head = new LinkedList();

head.prepend(1);
head.prepend(2);
head.prepend(3);
head.prepend(4);
head.prepend(5);

var reverseList = function (head) {
  if (!head) return head;
  let prev = null,
    curr = head,
    next = curr?.next;
  while (curr) {
    curr.next = prev;
    prev = curr;
    curr = next;
    next = next?.next;
  }
  return prev;
};

// DFS
// var reverseList = function (head) {
//     let dummy = new ListNode(null), result = dummy
//     const recursiveFunc = (node) => {
//         if (!node) return null
//         if (recursiveFunc(node.next)) { recursiveFunc(node.next) }
//         dummy.next = new ListNode(node.val)
//         dummy = dummy.next
//     }
//     recursiveFunc(head)
//     return result.next
// };
