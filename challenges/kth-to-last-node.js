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
   let count = 0;
   let value;

   function search(head) {
      //recurse until we reach the tail of the list
      if (head.next !== null) search(head.next);

      if (value === undefined) {
         count += 1;
         if (count === k) value = head.value;
      }
   }
   
   search(head);
   return value;
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e

console.log(kthToLastNode(2, a));
module.exports = {Node: Node, kthToLastNode: kthToLastNode};
