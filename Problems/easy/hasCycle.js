const LinkedList = require("../../LinkedList/LinkedList");
const head = new LinkedList();
//cycle functionality not added in linked list
head.prepend(1);
head.prepend(2);
head.prepend(3);
head.prepend(4);
head.prepend(5);

var hasCycle = function (head) {
  const visitedNodes = new Set();
  let currentNode = head;
  while (currentNode) {
    if (visitedNodes.has(currentNode)) {
      return true;
    } else {
      visitedNodes.add(currentNode);
      currentNode = currentNode.next;
    }
  }
  return false;
};
console.log(hasCycle(head));

//Optimal
// if (!head) {
//   var hasCycle = function (head) {
//     return false;
//   };
//   let fast = head;
//   let slow = head;
//   while (fast && fast.next) {
//     fast = fast.next.next;
//     slow = slow.next;
//     if (fast === slow) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(hasCycle(head));
