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
  let currNode = l1;
  let currNextNode = l2;
  while(currNode !== null && currNextNode !== null){
    let tempNode = currNode.next;
    currNode.next = currNextNode;
    currNextNode = currNextNode.next;
    if(tempNode !== null){
      currNode.next.next = tempNode;
    }
    currNode = tempNode;
  }
  return l1;
};

module.exports = {Node: Node, zip: zip};
