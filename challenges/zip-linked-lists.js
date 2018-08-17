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
  if (!l1 && !l2) return 0;
  else if (!l1) return l2;
  else if (!l2) return l1;
  else {
    const start = l1;
    let placeholder;

    while (!l1 && !l2) {

      placeholder = l1.next;      
      l1.next = l2;

      if (!placeholder) break;

      l1 = placeholder;
      placeholder = l2.next;
      l2.next = l1;

      if (!placeholder) break;
      
      l2 = placeholder;
    }
  }

  return start;
};

module.exports = {Node: Node, zip: zip};
