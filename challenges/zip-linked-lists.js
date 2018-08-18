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
  let newList = {}
  if (l1.value && l2.value){
    newList = new Node(l1.value)
    newList.next = new Node(l2.value)
    let nextCount = 2; 
  }
  while (l1.next !== null && l2.next !== null){
    console.log(newList)
    l1 = l1.next;
    l2 = l2.next;
    const newLeft = new Node(l1.value);
    const newRight = new Node(l2.value);
  }
  return newList; 
};

const left1 = new Node(1)
const left2 = new Node(2)
const left3 = new Node(3)
const left4 = new Node(4)
const left5 = new Node(5)

left1.next = left2;
left2.next = left3;
left3.next = left4;
left4.next = left5; 

const right11 = new Node(11)
const right12 = new Node(12)
const right13 = new Node(13)
const right14 = new Node(14)
const right15 = new Node(15)

right11.next = right12;
right12.next = right13;
right13.next = right14;
right14.next = right15;

console.log(left1);
console.log(right11);
console.log('testing zip', zip(left1, right11));

module.exports = {Node: Node, zip: zip};
