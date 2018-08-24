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
    let temp;
    let holder = []
    let currentHead = head;
    while (currentHead) {
        holder.push(currentHead)
        currentHead = head.next
    }
    for (let i = holder.length - 1; i > 0; i -= 1) {
        head = 

        

        
    }

}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
