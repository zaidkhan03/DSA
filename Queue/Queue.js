class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.items[this.rear] = value;
    this.rear++;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  // ,2,3,4,5,6,7
  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    if (!this.isEmpty()) return this.items[this.front];
    return null;
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    return console.log(this.items);
  }
}

const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q.isEmpty());
// q.dequeue();
q.print();
console.log(q.size());
