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
  let temp = head;
  let temp2 = head;
  let size = 0;
  
  while(temp != null){
    temp = temp.next;
    size++;
  }

  if(k > size || k < 0)
    return undefined;

  size -= k;
  while(size > 0){
    temp2 = temp2.next;
    size--
  }

  return temp2.value;
}


// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// console.log(kthToLastNode(2, a)); //-> returns 'D' (the value on the second to last node)

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
