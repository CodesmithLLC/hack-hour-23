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

const Node = function(value) {
    this.value = value;
    this.next = null;
  }


function deleteDups(head) {
    let prev = head;
    let curr = head.next;
    while (curr) {
        if (prev.value === curr.value) {
            curr = curr.next;
        } else {
            prev.next = curr;
            prev = curr;
            curr = curr.next;
        }
    }
    return head;
}

const node1 = new Node(1)
const node2 = new Node(1)
const node3 = new Node(2)
const node4 = new Node(3)
node1.next = node2
node2.next = node3
node3.next = node4

console.log(deleteDups(node1))

module.exports = deleteDups;
