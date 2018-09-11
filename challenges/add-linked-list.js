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
  let currentL1 = l1;
  let currentL2 = l2;
  let carryOver = 0;

  while (currentL1) {
    if ((currentL1.value + currentL2.value) > 9) {
      currentL1.value += (currentL2.value - 10)
      carryOver = 1;
    } else {
          currentL1.value += (currentL2.value + carryOver);
          carryOver = 0;
    }
    currentL1 = currentL1.next;
    currentL2 = currentL2.next;
  }
  return l1
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
