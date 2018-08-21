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
  let current = head;

  let nodes = [];
  
  //out of place solution
  //get to the tail
  while(current.next){
    nodes.push(current);
    current = current.next;
  }
  nodes.push(current); //push the tail on
  let tail = current;

  nodes.reverse();

  for(let i=0;i<nodes.length;i++){
    let node = nodes[i];
    if(nodes[i+1]) node.next = nodes[i+1];
    else nodes.next = null;
  }

  return nodes[0];



}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
