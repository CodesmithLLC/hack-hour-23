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
  let nodeLength = 0;
  if (head.next !== null) {
    nodeLength += 1;
    let nextNode = head.next
    nextNode = nextNode.next
  }
  for (let i = 0; i < nodeLength - k; i += 1) {
    let nextNode2 = head.next;
    nextNode2 += nextNode2.next;
  }
  return nextNode2.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
