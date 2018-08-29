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

function zip(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let curr1 = l1;
  let curr2 = l2;
  while (curr1 && curr2) {
    const holder = curr1.next;
    curr1.next = curr2;
    curr1 = curr1.next;
    curr2 = holder;
  }
  return l1;
};

// function zip(l1, l2) {
//   let l1Node = l1.next;
//   let l2Node = l2.next;
//   let curr1 = l1;
//   let curr2 = l2;
//   while (l1Node !== null || l2Node !== null) {
//     curr1.next = curr2;
//     curr1.next.next = l1Node;
//     l1Node = l1Node.next;
//     curr1 = curr1.next.next;
//     curr2 = l2Node;
//     l2Node = l2Node.next;
//   }
//   if (l1Node === null) {
//     curr1.next = l2Node;
//   } else {
//     curr1.next = l1Node;
//   }
//   return l1;
// }

module.exports = {Node: Node, zip: zip};
