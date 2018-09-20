/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

function deleteDups(head) {
  // input is a LL
  if (head) {
    // create an object that will hold values of LL
    const obj = {};
    let copy = head;
    let next = head.next;
    let prev;
    // traverse the linked list
    while (copy) {
      // store the values in an object saying its been traversed 
      if (obj[copy.value]) {
        break;
      } else {
        obj[copy.value] = 1;
        prev = copy;
        copy = next;
        next = next.next;
      }
    }

    if (copy.next) {

    } else {
      prev.next = null;
    }
  }
  // output is the linkedList
}

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const node = new LinkedList(1);
node.next = new LinkedList(2);
node.next.next = new LinkedList(2);
node.next.next.next = new LinkedList(3);

console.log(deleteDups(node));

module.exports = deleteDups;
