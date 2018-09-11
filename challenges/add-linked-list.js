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
  // guard cases
  if (!l1) return l2;
  if (!l2) return l1;
  if (!l1 && !l2) return 0;
  // hold vals in array
  const vals = [];
  // create copies of the objs
  let copyOfL1 = Object.assign(l1);
  let copyOfL2 = Object.assign(l2);
  // traverse through the LL
  while (copyOfL1 !== null) {
    // add the values at each section of the LL
    vals.push(copyOfL1.value + copyOfL2.value);
    copyOfL1 = copyOfL1.next;
    copyOfL2 = copyOfL2.next;
  }
  // iterate through vals
  for (let i = 0; i < vals.length; i += 1) {
    // convert num into a string, split into array, check to see if there's more than 1 digit.
    const convertIntoArray = vals[i].toString().split('');
    // if so, add that first digit to the previous element
    if (convertIntoArray.length > 1) {
      vals[i - 1] = vals[i - 1] + Number(convertIntoArray[0]);
      // reassign value at that index
      vals[i] = Number(convertIntoArray[1]);
    }
  }
  // return as a LL. 
  let i = vals.length - 1;
  const returningNode = new Node(vals[i]);
  while (i >= 0) {
    returningNode.next = new Node(vals[i]);
    i -= 1;
  }
  // console.log(returningNode);
  // console.log(vals);
}

// // first node
// const node = new Node(2);
// node.next = new Node(1);
// node.next.next = new Node(5)

// const node2 = new Node(5);
// node2.next = new Node(9);
// node2.next.next = new Node(2);

// addLinkedList(node, node2);

// console.log(node);
// console.log(node2);

module.exports = {Node: Node, addLinkedList: addLinkedList};
