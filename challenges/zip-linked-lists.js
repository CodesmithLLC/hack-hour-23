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
  let res;
  if (!l1) return l2;
  res = {value: l1.value, next: zip(l2, l1.next)}
  return res;
};

module.exports = {Node: Node, zip: zip};
