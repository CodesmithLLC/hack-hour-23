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
 */



 /*
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

var Node = function(value) {
  this.value = value;
  this.next = null;
}

// one way to do it, but dependant on the each node's value being unique
// also learned that building an obj in the for loop is not constant space
// function hasCycle(head) {
//   for (let i = head, obj = {}; i; i = i.next){
//     if (obj[i.value] === i) return true; 
//     if (!obj[i.value]) obj[i.value] = i
//   }
//   return false; 
// }

// didn't get it to work yet
// function hasCycle(head) {
//   let slow = head
//   let fast = head
//   while (slow.next){
//     console.log('slow', slow.value)
//     console.log('fast', fast.value)
//     if (fast.next === slow) return true
//     if (!fast.next) {
//       console.log('in if')
//       slow = slow.next
//       fast = slow
//     } else {
//       fast = fast.next
//     }
//   }
// }


var node1 = new Node('1');
var node2 = node1.next = new Node('2');
var node3 = node2.next = new Node('3');
var node4 = node3.next = new Node('4');
// console.log(hasCycle(node1)); // => false
node4.next = node2;
console.log(hasCycle(node1)); // => true


module.exports = {Node: Node, hasCycle: hasCycle}
