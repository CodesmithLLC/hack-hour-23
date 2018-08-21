/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    // set pointers
    let curr = head;
    let next = null;
    let prev = null;


    while (curr.value != null) { //while current is not pointing at a null value
    next = curr.next;             // next moves to current's next value
    curr.next = prev.value;       // current's next value becomes previous' value (where the reversing actually takes place)
    prev = curr.value;            // previous becomes current's value
    curr.value = next.value;      // current moves down the list to next's value
    }
    head = prev.value;            // Once current hits null, we drop out of while loop and then reset head to the previous value;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
