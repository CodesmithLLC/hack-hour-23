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
  if (typeof l1 !== 'object' && typeof l2 !== 'object') return undefined;
  if (typeof l1 !== 'object' || l1 === null) return l2;
  if (typeof l2 !== 'object' || l2 === null) return l1;
  const addList = new Node(0);
  let carryover = 0;
  let currentNode1 = l1;
  let currentNode2 = l2;
  let listNode = addList;
  while (currentNode1 !== null || currentNode2 !== null) {
    if (currentNode1 === null) {
      listNode.value = currentNode2.value;
      listNode.next = new Node(0);
      listNode = listNode.next;
      currentNode2 = currentNode2.next;
    } else if (currentNode2 === null) {
      listNode.value = currentNode1.value;
      listNode.next = new Node(0);
      listNode = listNode.next;
      currentNode1 = currentNode1.next;
    } else {
      let sum = currentNode1.value + currentNode2.value + carryover;
      if (sum >= 10) {
        carryover = 1;
        sum = sum % 10;
      } else {
        carryover = 0;
      }
      listNode.value = sum;
      listNode.next = new Node(0);
      listNode = listNode.next;
      if (currentNode1 !== null) currentNode1 = currentNode1.next;
      if (currentNode2 !== null) currentNode2 = currentNode2.next;
    }
  }
  if (carryover > 0) {
    listNode.value = carryover;
  }
  return addList;
}

// * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
// * Output: 7 -> 0 -> 8
const list1 = new Node(9);
list1.next = new Node(9);
list1.next.next = new Node(9);

const list2 = new Node(9);
list2.next = new Node(9);

console.log(addLinkedList(list1, list2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
