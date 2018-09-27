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
  const newNode = new Node(val);
  
  if(!this.head) return this.head = newNode;
  if(!!this.head && !this.tail){
    this.tail = newNode;
    this.head.next = newNode;
    this.tail.prev = this.head;
  }

  newNode.prev = this.tail;
  newNode.next = null;
  this.tail.next = newNode;
  this.tail = newNode;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  const curr = this.head;
  while(curr.val !== val){
    curr = curr.next;
  } 
  //remove curr
  curr.prev.next = curr.next;
  curr.next.prev = curr.prev;
};

module.exports = LinkedList;
