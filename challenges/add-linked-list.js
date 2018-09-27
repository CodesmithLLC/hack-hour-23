/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

// my old solution
// function addLinkedList(l1, l2) {
//   if (!l1 instanceof Node || !l2 instanceof Node) {
//     return 'inputs are not linked lists'
//   }
//   let sum = new Node(l1.value + l2.value)

//   const helper = (l1, l2) => {
//     //find the sum of the two current nodes
//     let addedValues;
//     if (l1 && l2) addedValues = l1.value + l2.value
//     else if (l1) addedValues = l1.value;
//     else if (l2) addedValues = l2.value; 

//     //find the last valid node of sum
//     let temp = sum;
//     while (temp.next) {
//       temp = temp.next; 
//     }

//     //can simply add a new node to end of sum.
//     if (addedValues < 10){
//       temp.next = new Node(addedValues);
//     } 
//     //added value is greater than 10. Add carry over to l1
//     else {
//       temp.next = new Node(addedValues % 10);
//       const remainder = Math.floor(addedValues / 10)
//       if (l1.next){
//         l1.next.value += remainder
//       }
//       else{
//         l1.next = new Node(remainder)
//       }
//     }
//     if (l1) l1 = l1.next;
//     if (l2) l2 = l2.next;
//     if (l1 || l2) helper(l1, l2)
//     return; 
//   }
//   helper(l1.next, l2.next); 
//   return sum;
// }

// Codesmith solution
function addLinkedList(l1, l2) {
  let cur = new Node(null); // will be the returned list, val doesnt matter
  const head = cur; // keep track of the head to ultimately return its .next
  let sum = 0;
  while (l1 || l2 || sum) { // we check sum in case of carryovers from end
    if (l1) {
      sum += l1.value;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.value;
      l2 = l2.next;
    }
    // add the new Node to the return list, modulo 10 will give us
    // either the number itself or the number minus 10 if > 9
    cur.next = new Node(sum % 10);
    cur = cur.next // move to next digit in the list we're making
    sum = sum > 9 ? 1 : 0; // start the next iteration with a sum of 1 if we need to carry a 1
  }
  return head.next; 
}


const left = new Node(5);
left.next = new Node(2)
left.next.next = new Node(3);

const right = new Node(2);
right.next = new Node(3);
right.next.next = new Node(7)

console.log('here is the answer', addLinkedList(left, right));

module.exports = {Node: Node, addLinkedList: addLinkedList};
