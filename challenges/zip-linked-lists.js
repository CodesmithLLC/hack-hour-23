/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}
//l1 and l2 are LL's
function zip(l1, l2) {
  if(!l1) return l2;
  if(!l2) return l1;
  let curr1 = l1;
  let curr2 = l2;
  while (curr1 && curr2) {
    const holder = curr1.next;
    console.log('holder',holder);
    curr1.next = curr2;
    curr1 = curr1.next;
    curr2 = holder;
    console.log('curr1', curr1);
    console.log('curr2', curr2);
    
  }
  return l1;
};
let l1 = new Node(1);
l1.next = new Node(3);
l1.next.next = new Node(5);
let l2 = new Node(2);
l2.next = new Node(4);
l2.next.next = new Node(6);
//console.log(l1);
console.log(zip(l1, l2));
module.exports = {Node: Node, zip: zip};
