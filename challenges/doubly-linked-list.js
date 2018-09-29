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
  const newTail = new Node(val)
  if (this.head === null) {
    this.head = newTail
    this.tail = newTail
  } else {
    newTail.prev = this.tail
    this.tail.next = newTail
    this.tail = newTail
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (this.head === null) {
    return 'linkedList is already empty'
  } 
  else if (this.head === this.tail) {
    this.head = null
    this.tail = null
  }
  else {
    this.tail = this.tail.prev
    this.tail.next = null
  }
};

const testList = new LinkedList()
testList.add(1);
console.log('test 1', testList)
testList.add(2)
console.log('test 2', testList)
testList.add(3)
console.log('test 3', testList)
testList.remove()
console.log('test 4', testList)
testList.remove()
console.log('test 5', testList)

testList.remove()
console.log('test 6', testList)


module.exports = LinkedList;

