/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
  this.head = null
}

function zip(l1, l2) {
  const newNode = new Node(value);
  if(!this.head){
    l1.head = newNode;
    l1.value = newNode
  } else {
    l1.value.next = newNode
    l1.head.next = this.value
  }
  
  newNode = this.
  l1.value = 

};

module.exports = {Node: Node, zip: zip};
