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

  let test = l1;
  while (test) {
    console.log(test.value);
    test = test.next;
  }

  test = l2;
  while (test) {
    console.log(test.value);
    test = test.next;
  }

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

  test = start;
  while (test) {
    console.log(test.value);
    test = test.next;
  }
  return start;
};

const a1node = new Node(1);
const a2node = new Node(2);
const a3node = new Node(3);
const a4node = new Node(4);
const a5node = new Node(5);
const a6node = new Node(6);

a1node.next = a2node;
a2node.next = a3node;

a4node.next = a5node;
a5node.next = a6node;

console.log(zip(a1node, a4node));

module.exports = {Node: Node, zip: zip};
