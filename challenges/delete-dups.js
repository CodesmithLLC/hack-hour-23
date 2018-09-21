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
function Node(value) {
  this.value = value;
  this.next = null;
}


function deleteDups(head) {
  let curr = head;
  let other = head;
  //while loop through ll
  const obj = {};
  while (curr.next) {
    obj[curr.value] = (obj[curr.value] || 0) + 1
    if (obj[curr.value] > 1) {
      //remove node
    }
  }
}


let l1 = new Node(1);
l1.next = new Node(2);
l1.next.next = new Node(3);
l1.next.next.next = new Node(4);
l1.next.next.next.next = new Node(3);
l1.next.next.next.next.next = new Node(6);
console.log(deleteDups(l1));
module.exports = deleteDups;
