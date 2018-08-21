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

// Converting LL into reversed LL and switching next and prev in place
function reverseLinkedList(head) {
  if (!head) return null;
  let curr = head;
  curr.prev = curr.next;
  curr.next = null;
  while (curr.prev) {
    curr.prev.prev = curr.prev.next;
    curr.prev.next = curr;
    curr = curr.prev;
  }
  return curr;
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
