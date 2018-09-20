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

var Node = function(value) {
  this.value = value;
  this.next = null;
}
var node1 = new Node('2');
var node2 = node1.next = new Node('2');
var node3 = node2.next = new Node('3');
var node4 = node3.next = new Node('3');
var node5 = node4.next = new Node('3');
var node6 = node5.next = new Node('4');


// one version. Stores the values in head for checking. Did this to avoid a temp buffer
// though not 100% sure this is what it means by temp buffer lolz
function deleteDups(head) {
  let pointer = head.next;
  let prev = head
  head[head.value] = head.value
  while (pointer.next){
    if (!head[pointer.value]){
      head[pointer.value] = pointer.value
      pointer = pointer.next; 
      prev = prev.next; 
    } else {
      pointer = pointer.next
      prev.next = pointer
    }
  }
  return head; 
}

console.log(deleteDups(node1))

module.exports = deleteDups;
