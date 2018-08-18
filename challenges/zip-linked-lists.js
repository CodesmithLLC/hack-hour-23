/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let c1;
  let c2;
  let holder; 
  if (l1.value && l2.value){
    c1 = l1;
    c2 = l2; 
  }
  while (c1.next !== null && c2.next !== null){
    holder = c1.next
    c1.next = c2
    c2 = holder; 
    c1 = c1.next; 
  }
  return l1 
};

const left1 = new Node(1)
const left2 = new Node(3)
const left3 = new Node(5)
const left4 = new Node(7)
const left5 = new Node(9)

left1.next = left2;
left2.next = left3;
left3.next = left4;
left4.next = left5; 

const right11 = new Node(2)
const right12 = new Node(4)
const right13 = new Node(6)
const right14 = new Node(8)
const right15 = new Node(10)

right11.next = right12;
right12.next = right13;
right13.next = right14;
right14.next = right15;

console.log(left1);
console.log(right11);
console.log('testing zip', zip(left1, right11));

module.exports = {Node: Node, zip: zip};
