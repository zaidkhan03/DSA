const LinkedList = require("../../LinkedList/LinkedList");
const head = new LinkedList();

head.prepend(1);
head.prepend(2);
head.prepend(3);
head.prepend(4);
head.prepend(5);

var isPalindrome = function (head) {
  if (!head || !head.next) {
    return true;
  }

  let slow = head;
  let fast = head;
  let prev = null;
  let nextNode = slow.next;

  while (fast && fast.next) {
    fast = fast.next.next;

    slow.next = prev;
    prev = slow;
    slow = nextNode;
    nextNode = nextNode.next;
  }

  if (fast) {
    slow = slow.next;
  }

  let firstHalf = prev;
  let secondHalf = slow;

  while (firstHalf && secondHalf) {
    if (firstHalf.val !== secondHalf.val) {
      return false;
    }
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  return true;
};

console.log(isPalindrome(head));
