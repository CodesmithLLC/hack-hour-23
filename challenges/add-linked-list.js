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
  let carry = 0;
  let result = new Node();

  let pointerRes = result;
  let pointer1 = l1;
  let pointer2 = l2;
  while(pointer1 !== null && pointer2 !== null) {
    pointerRes.value = ((pointer1.value + pointer2.value) % 10) + carry;
    carry = Math.floor((pointer1.value + pointer2.value) / 10);
    pointerRes.next = new Node();

    pointerRes = pointerRes.next;
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return result;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
