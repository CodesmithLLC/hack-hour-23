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
    curr = curr.next;   
    vals.push(curr.value)
    
    if (vals.includes(curr.next.value)) {
      curr.next = curr.next.next
    }
  }
  return head
}


module.exports = deleteDups;
