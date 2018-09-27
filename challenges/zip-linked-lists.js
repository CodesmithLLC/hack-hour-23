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
  let l1Prev = l1;
  let l2Prev = l2
  let l1Next = l1;
  let l2Next = l2;
  let evenMatched = true;

  while (evenMatched) {
    if (!l1Next.next || !l2Next.next) {
      evenMatched = false
    } else {
      l1Next = l1Next.next;
      l2Next = l2Next.next;
    }
    l1Prev.next = l2Prev;
    l2Prev.next = l1Next;
    
    l1Prev = l1Next;
    l2Prev = l2Next;
  }

  if(l1Next) {

  }

  return l1
};

module.exports = {Node: Node, zip: zip};
