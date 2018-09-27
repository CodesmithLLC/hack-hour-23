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
  //EMPTY LINKED LIST
  if (!this.head) this.head = this.tail = newNode;
  //ONE NODE IN LIST
  if (this.head === this.tail) {
    this.tail = newNode;
    this.head.next = this.tail;
    this.tail.prev = this.head;
  } else {
    const temp = this.tail;
    this.tail = newNode;
    temp.next = this.tail;
    this.tail.prev = temp;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let prev;
  let curr = this.head;
  //FIND NODE
  while (curr.val !== val || curr.next) {
    prev = curr;
    curr = curr.next;
  }

  if (curr.val === val) {
    //IF FIRST NODE
    if (!curr.prev) {
      if (curr.next) {
        this.head = curr.next;
      } else {
        this.head = this.tail = null;
      }
    }
    //IF NODE IS AT THE END
    if (!curr.next) this.tail = prev;
    //IF NODE IS IN THE MIDDLE
    if (curr.prev && curr.next) {
      const next = curr.next;
      prev.next = next;
      next.prev = prev;
    }
  }
};

module.exports = LinkedList;
