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
    if (head === null) return null;
    if (head.next === null) return head;
    const holder = [];
    while (head !== null) {
        holder.push(head);
        head = head.next;
    }
    holder.reverse()

    for (let i = 0; i < holder.length; i++) {
          holder[i].next = holder[i + 1];
    }
    holder[holder.length - 1].next = null;
    return holder[0];
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
