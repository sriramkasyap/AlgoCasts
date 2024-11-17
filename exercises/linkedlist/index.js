// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(element) {
    this.head = new Node(element, this.head);
  }

  size() {
    let node = this.head;
    let size = 0;
    while (node) {
      size++;
      if (!node.next) return size;
      node = node.next;
    }

    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;
    let node = this.head;
    while (node) {
      if (!node.next) return node;
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    let node = this.head;
    if (!node || !node.next) {
      this.head = null;
      return;
    }

    while (node.next) {
      if (!node.next.next) {
        node.next = null;
        return;
      }
      node = node.next;
    }
  }

  insertLast(element) {
    let last = this.getLast();

    if (last) {
      last.next = new Node(element);
    } else {
      this.head = new Node(element);
    }
  }

  getAt(index) {
    if (!this.head) return null;
    let i = 0;
    let node = this.head;

    while (node) {
      if (i === index) return node;
      i++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    if (index === 0) this.removeFirst();

    let prevItem = this.getAt(index - 1);

    if (prevItem) {
      let curItem = prevItem.next;
      prevItem.next = curItem?.next;
    } else {
      return;
    }
  }

  insertAt(element, index) {
    if (index === 0) this.insertFirst(element);

    let prevItem = this.getAt(index - 1);

    if (prevItem) {
      prevItem.next = new Node(element, prevItem.next);
    } else {
      this.insertLast(element);
    }
  }

  forEach(fn) {
    let node = this.head;
    let i = 0;
    while (node) {
      fn(node, i);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
