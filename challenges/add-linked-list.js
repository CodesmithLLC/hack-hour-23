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

Node.prototype.push = function(val) {
  let head = {
    
  }
}

function addLinkedList(l1, l2) {
  let curr1 = l1;
  let curr2 = l2;
  let num1Arr = [];
  let num2Arr = [];
  let num1Str;
  let num2Str;
  let finalNumber;
  let finalArr;

  while (curr1.next !== null && curr2.next !== null) {
    if (curr1) num1Arr.push(curr1.value);
    if (curr2) num2Arr.push(curr2.value);
  };

  num1Str = num1Arr.join('');
  num2Str = num2Arr.join('');

  finalNumber = (Number(num1Str) + Number(num2Str)).toString();
  
  finalArr = finalNumber.split('');

  
  


}

module.exports = {Node: Node, addLinkedList: addLinkedList};
