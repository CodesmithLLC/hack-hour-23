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
  let current = l1;
  let alt = l2;
  let tmp;
  let tmp2;

  while (current.next !== null) {
    tmp = current.next;
    current.next = alt;
    tmp2 = alt.next;
    alt.next = tmp;

    if (current = l1) {
      current = tmp2;
      alt = tmp;
    } else {
      current = 
    }
  }
  
};

newNode = new Node(10);

console.log(newNode);
module.exports = {Node: Node, zip: zip};
