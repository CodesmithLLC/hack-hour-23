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
  //will be the returned list, val doesn't matter
  let cur = new Node(null);
  //keep track of the head to ultimately return its .next
  const head = cur;
  let sum = 0;
  // we check sum in case of carryovers from end of lists
  while (l1 || l2 || sum) {
    if (l1) {
      sum += l1.value;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.value;
      l2 = l2.next
    }
    //add the new Node to the returned list, module 10 will give us 
    //either the # itself or the number minus 10 if > 9
    cur.next = new Node(sum % 10);
    //move to next digit in the list we're making
    cur = cur.next;
    //start the next iteration with a sum of 1 if we'rße carrying over 1
    sum = sum > 9? 1 : 0;
  }
  return head.next;
}

let l1 = new Node(2);
l1.next = new Node(1);
l1.next.next = new Node(5);
let l2 = new Node(5);
l2.next = new Node(9);
l2.next.next = new Node(2);

console.log(addLinkedList(l1, l2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
