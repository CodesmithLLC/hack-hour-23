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
  //see if l2 has length if not return l1
  //see if l1 has length if not return l2
  //see which is longer l1 or l2 and make the longer ones first node equal to this.head (assuming l1 for clarity)
  //make the next node in the list equal to l2's head
  //check to see if l1, l2 have length left if at any point one of the nodes has no length left return 
  //make the next node in list equal to l1's first node's this.next property
  //make nex
};

module.exports = {Node: Node, zip: zip};
