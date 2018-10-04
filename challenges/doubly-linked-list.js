/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.length = 0;
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
  let node = new Node(val);
  if (this.length) {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  } else {
    this.head = node;
    this.tail = node;
  }
  this.length += 1;
  return node;
}

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let node = new Node(val);
  
};

let l1 = new Node(1);
let l2 = l1.next = new Node(2);
l2.prev = l1;
let l3 = l2.next = new Node(3);
l3.prev = l2;
console.log(l1);

const doublyLL = new LinkedList();
doublyLL.add(1);
doublyLL.add(2);
doublyLL.add(3);
doublyLL.add(4);
doublyLL.add(5);
console.log(doublyLL);
module.exports = LinkedList;
