/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 */
 const a = new Node('A');
 const b = new Node('B');
 const c = new Node('C');
 const d = new Node('D');
 const e = new Node('E');
 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;
 /*
 */ 
console.log(kthToLastNode(2, a)); //-> returns 'D' (the value on the second to last node)
 

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  const valueTracker = {0: head.value} //tracks the node position as the key, and its associated value
  let counter = 1; //represents the node position at each increment

  //loops through the nodes to find the value at each node, and the node length
  while (head.next !== null) {
    valueTracker[counter] = head.next.value;
    head = head.next;
    counter++
  }
  const returnPosition = Object.keys(valueTracker).length - k //the index with the value we wish to return
  return valueTracker[returnPosition]; 
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
