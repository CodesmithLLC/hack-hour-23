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
    if(head === null){
        return null;
    }else{
        let temp = head;
        // let length = 0;
        const nodeHolder = [];
        
        while(temp != null){
            nodeHolder.push(temp);
            temp = temp.next;
        }
    
        let temp2 = nodeHolder[nodeHolder.length - 1];
        for(let i = nodeHolder.length - 2; i >= 0; i--) {
            temp2.next = nodeHolder[i];
            temp2 = temp2.next;
        }
        temp2.next = null;

        const newHead = nodeHolder[nodeHolder.length - 1];
        return newHead;
    }
    
}

// const tempArr = [];
// let n1 = new Node(1);
// n1.next = new Node(2);
// n1.next.next = new Node(3);
// reverseLinkedList(n1);


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
