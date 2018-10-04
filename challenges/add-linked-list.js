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

function addLinkedList(l1, l2) {
  // have a holder for the tenths place
    // carry this over to the next digit
  let carry = 0;
  let l3;
  // l1 = l1.next;
  // l2 = l2.next;

  while(l1 !== null || l2 !== null) {
    let total = carry + l1.value + l2.value;
    
    if(total.toString().length === 2) {
      carry = 1;
      total = total % 10;
    }else {
      carry = 0;
    }
    
    l3 = new Node(total);
    console.log(l3.value);
    l1 = l1.next;
    l2 = l2.next;
    l3 = l3.next;
  }

  return l3
}


let l1 = new Node(2);
l1.next = new Node(1);
l1.next.next = new Node(5);
let l2 = new Node(5);
l2.next = new Node(9);
l2.next.next = new Node(2);


function print(l3) {
  while(l3 != null) {
    console.log(l3.value);
    l3 = l3.next;
  }
}

print(addLinkedList(l1,l2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
