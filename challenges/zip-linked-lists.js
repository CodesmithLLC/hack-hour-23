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
// 1 -> 2 -> 3 -> null
// 4 -> 5 -> 6 -> null
// 1 -> 4 -> 2 -> 5 -> 3 -> 6 -> null
function zip(l1, l2) {
  // l1 will always be first, l2's node always points to null
  // have 2 pointers and 2 temps?
  while(l1.next !== null && l2.next !== null){
    // console.log('hi');
    let temp1 = l1.next;
    console.log('l1 next value', l1.next.value);
    l1.next = l2;
    console.log('l2 value', l2.value);
    // let temp2 = l2.next;
    l2.next = temp1;
    return zip(l1.next, l2.next);
  }
  return l1;
};

let list1 = new Node(1);
list1.next = new Node(2);
list1.next.next = new Node(3);

let list2 = new Node(4);
list2.next = new Node(5);
list2.next.next = new Node(6);

console.log(zip(list1,list2));

module.exports = {Node: Node, zip: zip};
