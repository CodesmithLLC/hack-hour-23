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
  const node = new Node(val);
  
  if (!this.head) {
    this.head = node;
  }  else {
      node.prev = this.tail;
      this.tail.next = node;
  }

  this.tail = node;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let curr = this.head;
  while ( curr.val !== this.tail.val ) {
    if (curr.val === val) {
      curr.next.prev = curr.prev;
      curr.prev.next = curr.next;
      break
    }
    curr = curr.next;
  }
};


module.exports = LinkedList;
