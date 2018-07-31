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
  count = 0;

  function inner(currNode){
    if(currNode !== null) {
      let result = inner(currNode.next);
      if(result !== undefined) {
        return result;
      }
      if(count == k) {
        return currNode.value;
      }
      count ++;
    } else {
      count ++;
    }
  }

  let temp = inner(head);
  count = 0;
  return temp;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
