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
  let num1 = '';
  let num2 = '';
  let p1 = l1;
  let p2 = l2;
  while (p1) {
    num1 += p1.value.toString();
    p1 = p1.next

  }
  while (p2) {
    num2 += p2.value.toString();
    p2 = p2.next;
  }

  return parseInt(num1.split('').reverse().join('')) + parseInt(num2.split('').reverse().join(''))

}

module.exports = {Node: Node, addLinkedList: addLinkedList};
