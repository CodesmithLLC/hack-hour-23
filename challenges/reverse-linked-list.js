/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
  // input is a LL.
  // check to see if head.next !== null, utilize to traverse through the array
  // if true, hold the value of the node and the node that it is pointing to. 
  // explore utilizing a helper function to reverse the two.
    // explore using recursion?
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
