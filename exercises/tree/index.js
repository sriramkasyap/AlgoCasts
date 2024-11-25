// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(child) {
    this.children.push(new Node(child));
  }

  remove(child) {
    this.children = this.children.filter((curChild) => curChild.data !== child);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    let callQueue = [this.root];
    while (callQueue.length > 0) {
      let node = callQueue.shift();
      callQueue.push(...node.children);
      fn.call(this, node);
    }
  }

  traverseDF(fn) {
    let callQueue = [this.root];

    while (callQueue.length > 0) {
      let node = callQueue.shift();
      callQueue.unshift(...node.children);
      fn.call(this, node);
    }
  }
}

module.exports = { Tree, Node };
