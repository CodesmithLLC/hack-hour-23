/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true if the linked list has a cyclical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

var Node = function(value) {
  this.value = value;
  this.next = null;
}

// function hasCycle(head) {
//   // guard cases
//   if (!head) return false;
//   if (typeof head !== 'object') return false;

//   if (head.next === null) {
//     return false;
//   }
//   if (head.next !==  null) {
//     // recursive call to reassign value of head
//     return hasCycle(head.next) // results 
//   }
// }

const hasCycle = (head) => {
  // guard cases
  if (!head) return false;
  if (typeof head !== 'object') return false;

  // keep track of what you looped through
  const tracker = {};

  // traverse the LL
  while (head.next) {
    // if value doesn't exist, create and increment indicating it has been traversed.
    if (!tracker[head.value]) {
      tracker[head.value] = 1;
    } else if (tracker[head.value]) {
      // if value does exist, terminate
      return true;
    } else {
      // continue traversal of the LL
      head = head.next;
    }
  }
  // if reached the end, return false
  return false;
}


module.exports = {Node: Node, hasCycle: hasCycle}
var node1 = new Node('1');
var node2 = node1.next = new Node('2');
var node3 = node2.next = new Node('3');
var node4 = node3.next = new Node('4');
var node5 = node4.next = new Node('5');
console.log(hasCycle(node1)); // => false
node5.next = node2;
// hasCycle(node1); // => true