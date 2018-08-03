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

<<<<<<< HEAD


function kthToLastNode(k, head) {
  let nodes = [];
  if(!head) return undefined;
  
  function linkedListTraverse(head){
    nodes.push(head);
    if(head.next !== null){
      linkedListTraverse(head.next);
    } else {
      return null;
    }
  }
  linkedListTraverse(head);

  if(nodes.length < k) return undefined;
  return nodes[nodes.length - k];
=======
function kthToLastNode(k, head) {

>>>>>>> 2190d775e6d623e610760b846238c0683d13b860
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
