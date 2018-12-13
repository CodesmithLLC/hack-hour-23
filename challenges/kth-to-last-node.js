/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list. 
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
    let current = head
    let prev = head
    for(let i =0; i < k && head; i++) {
      current = current.next
    }
    
    while(current & prev) {
      current = current.next;
      prev = prev.next
    }
    return prev.value
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');
// a.next = b;
// kthToLastNode(2,a)
// c.next = d;
// d.next = e;
// -> returns 'D' (the value on the second to last node)