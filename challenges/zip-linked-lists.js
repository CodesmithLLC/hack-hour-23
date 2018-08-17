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
  // check if head of l1 exists. if not, return l2;
  if (!l1) return l2;
  if (!l2) return l1;
  if (typeof l1 !== 'object' || typeof l2 !== 'object') return undefined;
  // create head Node(l1.value)
  // .next node = Node(l2.value);
  const newList = new Node(l1.value);
  newList.next = new Node(l2.value);
  let currentNode = newList.next;
  let l1Next = l1.next;
  let l2Next = l2.next;
  // lists of different length
  while (l1.next !== null && l2.next !== null) {
    if (l1.next === null) {
      currentNode.next = new Node(l2Next.value);
      currentNode = currentNode.next;
      l2Next = l2.next;
    } else if (l2.next === null) {
      currentNode.next = new Node(l1Next.value);
      currentNode = currentNode.next;
      l1Next = l1.next;
    } else {
      currentNode.next = new Node(l1Next.value);
      currentNode = currentNode.next;
      l1Next = l1.next;
      currentNode.next = new Node(l2Next.value);
      currentNode = currentNode.next;
      l2Next = l2.next;
    }
  }
  return newList;
};

module.exports = {Node: Node, zip: zip};
