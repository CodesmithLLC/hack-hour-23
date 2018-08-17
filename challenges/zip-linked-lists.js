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
  //loop through l1 until .next is null
  let result = l1;
  let temp = result;
  // console.log(result);
  while (result) {
    result = result.next;
    // console.log(result);
    if (result.next === null) {
      result.next = l2;
      // console.log(result);
      while (l2) {
        result.next = l2;
        result = result.next;
        l2 = l2.next;
        if (l2.next === null) break;
      }
      // console.log(result);
      // console.log('whatup');
      break;
    }
  }

  // console.log(temp);
  return temp;
}

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);
// node1.next = node2;
// node2.next = node3;

// let node4 = new Node(4);
// let node5 = new Node(5);
// let node6 = new Node(6);
// node4.next = node5;
// node5.next = node6;

// console.log(zip(node1, node4));

module.exports = { Node: Node, zip: zip };
