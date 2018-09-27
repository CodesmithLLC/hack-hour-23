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

//NOT IN PLACE_____________________
function reverseLinkedList(head) {
    let index = -1;
    const indexing = [];
    let head = head;
    while (head) {
        index++;
        indexing.push(head);
        head = head.next;
        indexing[index].next = null;
    }
    const newHead = indexing[index];
    let currentPosition;
    while (index >= 0) {
        index--;
        if (!newHead.next) {
            newHead.next = indexing[index]
        } else {
            currentPosition.next = indexing[index];
        }
        currentPosition = indexing[index]
    }
    return newHead
}

//IN PLACE______(IN PROGRESS)________
// function reverseLinkedList(head) {
//     let newHead;
//     while (head.next) {
//         let prev;
//         let curr = head;
//         while (curr.next) {
//             prev = curr;
//             curr = head.next;
//         }
//         if (!newHead) newHead = curr;
//         curr.next = prev;
//     }
// }

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
