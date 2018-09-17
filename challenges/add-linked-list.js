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
  let llHead;
  let llCur;
  let l1Curr = l1;
  let l2Curr = l2;
  let carryOver;
  while (l1Curr || l2Curr) {
    let value = l1Curr.value + l2Curr.value;
    if (carryOver) value += carryOver;
    console.log(value)
    if (value > 9) {
      valueSplit = value.toString().split('');
      value = Number(valueSplit[1]);
      carryOver = Number(valueSplit[0]);
    }
    if (llHead) {
      ll
    }
  l1Curr = l1Curr.next;
  l2Curr = l2Curr.next;
  }
}

const ll1 = new Node(2)
const ll2 = new Node(5)

const new1 = new Node(1)
ll1.next = new1
const new2 = new Node(5)
new1.next = new2

const new3 = new Node(9)
ll2.next = new3
const new4 = new Node(2)
new3.next = new4

console.log(addLinkedList(ll1, ll2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
