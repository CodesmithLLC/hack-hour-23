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
  // declare some tracker variables
  let currentNode = head;
  let previousNode = null;
  let nextNode;

  // iterate over the list
  while (currentNode) {
      // update the next tracker
      nextNode = currentNode.next;
      // reassign the next value of the current node to previous node
      currentNode.next = previousNode;
      // update all the trackers
      previousNode = currentNode;
      currentNode = nextNode;
  }

  // return the old tail
  return previousNode;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
