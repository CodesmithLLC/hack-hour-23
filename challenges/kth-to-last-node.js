//**
 //* Write a function that takes two parameters, an integer and the head of a
 //* singly linked list, and returns the VALUE on the kth to last node in the list.
 //*
  const a = new Node('A');
  const b = new Node('B');
 const c = new Node('C');
  const d = new Node('D');
  const e = new Node('E');
 
  a.next = b;
  b.next = c;
 c.next = d;
 d.next = e;

 kthToLastNode(2, a);// -> returns 'D' (the value on the second to last node)
// *

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  //k = kth to last node, 2nd to last = 2
  //initialize nextNode = head.next;
  let current = head;
  let nextNode = head.next;
  //while loop to loop through until nextNode === null;
  let position = 0;
  let nodeCounter = {};
  while (nextNode !== null) {
    //give the corresponding node a counter
    nodeCounter[position] = current.value;
    position++;
    current = current.next;
    nextNode = nextNode.next;
  }
  //last node counter - (k - 1) = resultNode counter
  //grab the value at that node
  return nodeCounter[position - k - 1];
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
