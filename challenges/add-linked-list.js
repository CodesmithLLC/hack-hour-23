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
  //return a new linked list with the same structure but with the sums
  let curr1 = l1;
  let curr2 = l2;
  let l3;
  let result;
  
  let round = 1;
  while (curr1 && curr2) {
    //add the values
    //carry over if sum >= 10
    
    let num = curr1.value + curr2.value;
    let array = JSON.stringify(num).split('');
    let onesDigit = array[array.length - 1];
    console.log('round', round);
    console.log('ones', onesDigit);
    if (num >= 10) {
      //add 1 to next val
      //adjust curr sum val to just be the one digit
      //create new node
      console.log('inside first if');
      if (l3) {
        console.log('inside l3 if statement');
        console.log(l3, onesDigit);
        l3.next = new Node(onesDigit);
        
        l3 = l3.next;
        console.log(l3);
      } else {
        console.log('inside l3 else statement');
        l3 = new Node(onesDigit);
        result = l3;
      }
      curr1 = curr1.next;
      curr2 = curr2.next;
      curr1.value = curr1.value + 1;
    } else {
      console.log('inside 2nd if');
      //create new node or 
      //l3 = new Node(onesDigit);
      (l3) ? l3.next = new Node(onesDigit) : l3 = new Node(onesDigit);
      //set curr1 and 2 to curr1.next and curr2.next
      curr1 = curr1.next;
      curr2 = curr2.next;
    }
    round += 1;
  }
  //console.log('curr3', curr3);
  console.log('result', l3);
  return l3;
}

let l1 = new Node(2);
l1.next = new Node(1);
l1.next.next = new Node(5);
let l2 = new Node(5);
l2.next = new Node(9);
l2.next.next = new Node(2);

console.log(addLinkedList(l1, l2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
