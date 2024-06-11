// const matrix = [
//   [0, 1, 0],
//   [1, 0, 1],
//   [0, 1, 0],
// ];

// const adjancencyList = {
//   A: ["B"],
//   B: ["AC"],
//   C: ["B"],
// };

class Graph {
  constructor() {
    this.adjancencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjancencyList[vertex]) {
      this.adjancencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjancencyList[vertex1]) {
      addVertex(vertex1);
    }
    if (!this.adjancencyList[vertex2]) {
      addVertex(vertex2);
    }
    this.adjancencyList[vertex1].add(vertex2);
    this.adjancencyList[vertex2].add(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjancencyList[vertex1].delete(vertex2);
    this.adjancencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjancencyList[vertex]) {
      return;
    }
    for (const adjacentVertex of this.adjancencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjancencyList[vertex];
  }
  hasEdge(vertex1, vertex2) {
    return (
      this.adjancencyList[vertex1].has(vertex2) &&
      this.adjancencyList[vertex2].has(vertex1)
    );
  }

  display() {
    for (const vertex in this.adjancencyList) {
      console.log(vertex + "->" + [...this.adjancencyList[vertex]]);
    }
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("C", "B");
// graph.removeEdge("C", "B");
graph.removeVertex("B");
graph.display();
console.log(graph.hasEdge("A", "B"));
console.log(graph);

module.exports = Graph;
