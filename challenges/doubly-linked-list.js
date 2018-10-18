/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.numberOfValues = 0;
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
  const node = new Node(val);

  if(!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    node.previous = this.tail;
    this.tail = node;
  }
  this.numberOfValues++;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  
};

module.exports = LinkedList;
