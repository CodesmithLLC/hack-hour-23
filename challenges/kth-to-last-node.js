/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  if (head.next === null) return head;
  let node = head;
  let total = 1;
  while (node.next !== null) {
    total++;
    node = node.next;
  }

  let counter = 0;
  while (head.next !== null) {
    if (counter === total - k) {
      return head;
    }
    counter++;
    head = head.next;
  }
  return head;
}

module.exports = { Node, kthToLastNode };
