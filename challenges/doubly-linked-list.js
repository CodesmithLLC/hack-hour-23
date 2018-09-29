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
  newTail = new Node(val);
  if (!this.head) {
    this.head = newTail;
  }
  newTail.prev = this.tail;
  this.tail = newTail;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let revIdx = this.tail;
  let fwdIdx = this.head;

  if (revIdx === fwdIdx && revIdx.val === val) {
    this.tail = null;
    this.head = null;
    return;
  }

  //loop from head and tail, searchin for value
  while (revIdx !== fwdIdx) {
    if(revIdx.val === val){
      revIdx.next.prev = revIdx.prev;
      revIdx.prev.next = revIdx.next;
    }else if(fwdIdx.val === val){
      fwdIdx.prev.next = fwdIdx.next;
      fwdIdx.next.prev = fwdIdx.prev;
    }else{//not found, move idxs along
      fwdIdx = fwdIdx.next;
      revIdx = revIdx.prev;
    }
  }
};

module.exports = LinkedList;
