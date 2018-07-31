/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {

  //i will start at the head of the linked list, and intend on iterating through the whole thing
  //i will store the previous k values as I iterate. pushing on new ones, shifting off old ones once its length is K
  //once I hit the tail, I will get the first value of that array as it should be the target.

  const kthValueStore = [];
  let currentNode = head;
  
  while(currentNode){
    if(kthValueStore.length === k){
      kthValueStore.shift();
    }
    kthValueStore.push(currentNode.value);

    currentNode = currentNode.next;
  }

  return kthValueStore.shift();

}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
