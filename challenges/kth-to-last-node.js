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

  // store the values of the nodes in an array, will be used to access kth value. 
  const storeVals = [];
  let counter = 1;
  let currNode = head;

  // traverse through the linked list, starting from head. 
  while (currNode.next !== null) {
    counter++;
    storeVals.push(currNode.value); // store the value of current node in the element 
    currNode = currNode.next; // keep reassigning the value of the current Node, to continue traversing 
  }
  
  if (currNode.next === null && k < 2) { // edge case if grabbing the last node 
    return currNode.value;
  } else {
    // return the value stored on the kth to last node in the list. 
    return storeVals[counter - k];
  }
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
