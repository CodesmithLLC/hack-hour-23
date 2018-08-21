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
    let stack = [];
    let i = 0;
    let current = head;
    let newHead;

    while (current.next !== null) {
        stack.push(current);
        i++;
        current = current.next;
    }
    newHead = current;
    i--;
    while (i >= 0) {
        newHead.next = stack[i];
        newHead = newHead.next;
        i--;
    }
    return newHead;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
