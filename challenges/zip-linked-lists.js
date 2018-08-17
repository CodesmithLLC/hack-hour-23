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

// inputs are linked lists
// goal: merge the lists

// use recursion? keep recursively calling until you reach null.
// merge two linked lists so that their nodes alternate
  // l1 (1) l2 (1) 
  // l1 (2) l2 (2) 
  // l1 (3) l2 (3)
  // l1 (4) l2 (3)

// linked list 1
  // needs to have the next property point at LL 2 
  // LL 2 need its next property to point at LL1's original next 

function zip(l1, l2) {
  let holdL1NextNode;
  let holdL2NextNode;

  // going step by step 
  if (l1.next !== null) {
    holdL1NextNode = l1.next;
    holdL2NextNode = l2.next;
    l1.next = l2;
    l2.next = holdL1NextNode;
  }
};

module.exports = {Node: Node, zip: zip};
