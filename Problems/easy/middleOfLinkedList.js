const LinkedList = require("../../LinkedList/LinkedList");

const l1 = new LinkedList();

l1.append(1);
l1.append(2);
l1.append(3);
l1.append(4);
l1.append(5);

//brute
var middleNode = function (head) {
  let curr = head;
  let index = 0;
  let result = head;

  while (curr) {
    index += 1;
    curr = curr.next;
  }

  index = Math.floor(index / 2);

  while (index !== 0) {
    result = result.next;
    index -= 1;
  }

  return result;
};

//slow-fast
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

console.log(middleNode(l1.head));
