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
    let currentNode = head;
    let prevHolder;
    let nextHolder = currentNode.next;
    currentNode.next = null;
    while (nextHolder.next !== null) {
        prevHolder = currentNode;
        currentNode = nextHolder;
        nextHolder = nextHolder.next;
        currentNode.next = prevHolder;
    }
    nextHolder.next = currentNode;
    return nextHolder;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
