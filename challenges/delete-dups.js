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
function Node(val) {
  this.val = val;
  this.next = null;
}


function deleteDups(head) {
  const arr = [];
  console.log(head.val);
  while (head) {
    arr.push(head.val);
  }
}
const linkedList = new Node(1);
linkedList.next = new Node(2);
linkedList.next.next = new Node(2);
linkedList.next.next.next = new Node(3);
linkedList.next.next.next.next = new Node(2);
deleteDups(linkedList);
module.exports = deleteDups;
