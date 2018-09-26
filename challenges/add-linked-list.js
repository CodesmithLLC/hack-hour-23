/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  // edge cases
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  
  let head = null;
  let temp = head;
  let overFlow = 0;

  // loop through both linked lists
  while (l1 !== null || l2 !== null) {
    // establish a head
    if (head === null) {
      head = temp = new Node();
    } else {
      temp.next = new Node();
      temp = temp.next;
    }

    // assumses l1 is finished
    if (l1 === null) {
      temp.value = l2.value + overFlow;
      l2 = l2.next;
    }
    // assumes l2 is finished
    else if (l2 === null) {
      temp.value = l1.value + overFlow;
      l1 = l1.next;
    }
    // neither list is finished
    else {
      temp.value = l1.value + l2.value + overFlow;
      l2 = l2.next;
      l1 = l1.next;
    }
    // handles overflow to carry over
    overFlow = 0;
    if (temp.value > 9) {
      overFlow = Math.floor(temp.value / 10);
      temp.value = temp.value % 10;
    }
  }
  if (overFlow !== 0) temp.next = new Node(overFlow);
  return head;
}

const nodeA = new Node(9);
nodeA.next = new Node(2);
nodeA.next.next = new Node(3);

const nodeB = new Node(6);
nodeB.next = new Node(4);
nodeB.next.next = new Node(5);
console.log(addLinkedList(nodeA, nodeB));

module.exports = {Node: Node, addLinkedList: addLinkedList};
