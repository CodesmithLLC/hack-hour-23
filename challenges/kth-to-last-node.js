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
  // get length of list by looping until you reach null
  let current = head;
  let counter = 0;
  while (current.next !== null) { // while not null
      counter += 1;
      current = current.next; 
  }

  current = head; // reset current to head
  for (let i = 0; i <= counter - k; i++) { // loop until we reach counter - k
      current = current.next;
  }
  //console.log("the current node", current.value)
  return current.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
