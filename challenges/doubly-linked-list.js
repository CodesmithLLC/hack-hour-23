/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  if (this.head === null && this.tail === null) {
    const node = new Node(val);
    this.head = node;
    this.tail = node;
  } else {
    // make new node at the tail
    this.tail.next = new Node(val);
    // set prev equal to the current tail
    this.tail.next.prev = this.tail;
    // move the tail
    this.tail = this.tail.next;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (this.head === null) return;
  if (this.head.val === val) {
    // move the head
    this.head = this.head.next;
    // remove link from previous node to the head
    this.head.prev.next = null;
    // remove link to previous node
    this.head.prev = null;
  }
  let currentNode = this.head;
  while (currentNode.val !== val) {
    if (currentNode === null) break;
    if (currentNode.val === val) {
      // {A}      {B}      null
      //  ^-----------------^
      // get the next node
      const next = currentNode.next;
      // get the previous node
      const prev = currentNode.prev;
      // remove link from currentNode to next node
      currentNode.next = null;
      // remove link from currentNode to previous node
      currentNode.prev = null;
      // link previous node with currentNode.next
      prev.next = next;
      if (next !== null) {
        // link next node to previous node if it isn't null
        next.prev = prev;
      }
      if (prev.next === null) this.tail = prev;
      break;
    }
    currentNode = currentNode.next;
  }
};

module.exports = LinkedList;
