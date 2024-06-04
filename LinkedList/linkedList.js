class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  delete(index) {
    if (index < 0 || index > this.size) {
      return;
    }
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {}
  }

  print() {
    if (this.isEmpty()) {
      console.log("Empty List");
    } else {
      let curr = this.head;
      let list = "";
      while (curr) {
        list += `${curr.value}->`;
        curr = curr.next;
      }
      console.log(list);
    }
  }
}
const list = new LinkedList();
// console.log(list.isEmpty(), "/", list.getSize());
// list.print();

// list.prepend(1);
// list.print();

// list.prepend(2);
// list.prepend(3);
// list.prepend(4);
// list.prepend(5);
// list.prepend(3);
// list.prepend(4);
// list.prepend(2);
list.insert(99, 1);
// list.append(9);
// list.print();
// console.log(list);

module.exports = LinkedList;
