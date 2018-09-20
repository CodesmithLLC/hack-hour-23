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
  const vals = [];
  let curr = head;

  while(curr.next) {
    console.log(vals)
    if (vals.includes(curr.value)) {
      curr.value = curr.next.value
    } else {
      vals.push(curr.value)
    }
    curr = curr.next;
  }
  return head
}

module.exports = deleteDups;
