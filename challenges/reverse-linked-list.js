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
    if (!head.next) return head; 
    if (!head.next.next) {
        let temp = head
        head = head.next
        head.next = temp; 
        head.next.next = null; 
        return head; 
    }
    let first = head.next
    let second = head.next.next;
    head.next = null; 
    while (first){
        first.next = head; 
        head = first; 
        first = second;
        if (second) second = second.next
    }
    return head; 
}


const left1 = new Node(1)
const left2 = new Node(2)
// const left3 = new Node(3)
// const left4 = new Node(4)
// const left5 = new Node(5)

left1.next = left2;
// left2.next = left3;
// left3.next = left4;
// left4.next = left5; 

console.log('reverse it ', reverseLinkedList(left1))


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
