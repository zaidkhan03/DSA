const LinkedList = require("../LinkedList/linkedList");

//input
//l1 = [2,4,3], l2 = [5,6,4]

const l1 = new LinkedList();
const l2 = new LinkedList();
// l1.prepend(1);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(0);
// l1.prepend(1);

l1.prepend(9);
l1.prepend(9);
// l1.prepend(9);

// l2.prepend(9);
l2.prepend(9);
l2.prepend(9);
// console.log(l1);

//Brute
// var addTwoNumbers = function (l1, l2) {
//   ////////
//   let curr1 = l1.head,
//     value1 = "";
//   while (curr1) {
//     value1 = curr1.value + value1;
//     curr1 = curr1.next;
//   }
//   console.log(value1);
//   ////////
//   let curr2 = l2.head,
//     value2 = "";
//   while (curr2) {
//     value2 = curr2.value + value2;
//     curr2 = curr2.next;
//   }
//   console.log(value2);
//   ////////

//   const addingValues = (BigInt(value1) + BigInt(value2)).toString();
//   console.log(addingValues);
//   ////////
//   let returnedListNode = null;

//   for (let i = 0; i < addingValues.length; i++) {
//     returnedListNode = {
//       val: Number(addingValues[i]),
//       next: returnedListNode,
//     };
//   }
//   console.log(returnedListNode);
//   return returnedListNode;
// };

//Optimal
var addTwoNumbers = function (l1, l2) {
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  let v1 = l1.head,
    v2 = l2.head,
    sum = 0,
    carry = 0,
    result = new Node();
  newNode = result;
  //   console.log(result, newNode);
  while (v1 !== null || v2 !== null || carry !== 0) {
    sum = (v1 ? v1.value : 0) + (v2 ? v2.value : 0) + carry;
    carry = sum > 9 ? 1 : 0;

    // console.log(newNode.next);
    newNode.next = new Node(sum % 10);

    // console.log(newNode);
    newNode = newNode.next;

    // console.log();

    v1 = v1 ? v1.next : null;
    v2 = v2 ? v2.next : null;
  }
  //   console.log(newNode);
  console.log(result.next);
  return result.next;
};

addTwoNumbers(l1, l2);
