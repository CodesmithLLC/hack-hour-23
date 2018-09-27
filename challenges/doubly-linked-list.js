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
  this.tail.next = new Node(val);
  this.tail.next.prev = this.tail;
  this.tail = this.tail.next;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let prevNode = null;
  let node = this.head;
  while(node) {
    if(node.value === val) {
      node.next.prev = prevNode;
      node.prev.next = node.next;
      break;
    }
    node = node.next;
  }
};

module.exports = LinkedList;
