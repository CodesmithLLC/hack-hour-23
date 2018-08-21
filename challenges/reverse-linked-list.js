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
  if (!head.next) return head;
  let h = head;
  let p1 = head.next;
  let p2;
  h.next = null;
  while (p1.next) {
    p2 = p1.next;
    p1.next = h;
    h = p1;
    p1 = p2;
  }
  p1.next = h;
  return p1;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
