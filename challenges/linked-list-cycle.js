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

// solution 1: add a property to the node

function hasCycle(linkedlist) {
  
  // ===> Solution 1
  // if (linkedlist) {
  //   let curr = linkedlist;

  //   while( curr ) {
  //     if (curr.seen) return true;
  //     curr.seen = true
  //     curr =curr.next
  //   }
  // }

  // ===> solution 2 (rabbit and the hare)
  if (linkedlist) return findCycle(linkedlist, linkedlist.next);

  function findCycle(tortoise, hare) {
    if ( tortoise === hare ) return true;
    return hare !== null && hare.next !== null && findCycle(tortoise.next, hare.next.next)
  }





  //iterate the linked list 
    // check if 'seen' property, return true
    // otherwise put a seen property




  // let isCycle = false
  // let storage = {};

  // while (head.value !== null) {
  //   for ( let key in storage) {
  //   if (storage[key] === head.value) { isCycle = true }
  //   }
  //   storage[head.value] = head.value
  //   head.value = head.next

  // }

  // return isCycle;
}


  var node1 = new Node('1');
  var node2 = node1.next = new Node('2');
  var node3 = node2.next = new Node('3');
  var node4 = node3.next = new Node('4');
  var node5 = node4.next = new Node('5');
  hasCycle(node1); // => false
  node5.next = node2;
  hasCycle(node1); // => true

module.exports = {Node: Node, hasCycle: hasCycle}
