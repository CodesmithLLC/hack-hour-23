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
// set current node to dummy head of the returning list.
let result = new ListNode(-1);
let current = result;

let carry = 0;
while(l1 && l2) {
    if(!l1 && !l2 && !carry) {
        break;
    }
    let val1 = 0;
    let val2 = 0;
    if(l1) {
        val1 = l1.val;
        l1 = l1.next;
    }
    if(l2) {
        val2 = l2.val;
        l2 = l2.next;
    }
    let sum = val1 + val2 + carry;
    carry = sum >= 10 ? 1 : 0;
    current.next = new ListNode (sum >= 10 ?( sum-10) : sum);
    current = current.next;
}

return result.next;

};

module.exports = {Node: Node, addLinkedList: addLinkedList};

// Initialize pp and qq to head of l1l1 and l2l2 respectively.
// Loop through lists l1l1 and l2l2 until you reach both ends.
// Set xx to node pp's value. If pp has reached the end of l1l1, set to 00.
// Set yy to node qq's value. If qq has reached the end of l2l2, set to 00.
// Set sum = x + y + carrysum=x+y+carry.
// Update carry = sum / 10carry=sum/10.
// Create a new node with the digit value of (sum \bmod 10)(summod10) and set it to current node's next, then advance current node to next.
// Advance both pp and qq.
// Check if carry = 1carry=1, if so append a new node with digit 11 to the returning list.
// Return dummy head's next node.

// l1=[0,1]
// l2=[0,1,2]l2=[0,1,2]	When one list is longer than the other.

/*
// if there are no more nodes, check for carried over 1 and add it if neccessary and return new linked list
  // add the two current nodes, retrain the carried over 1s
  // recurse through with nexts
}

let a1 = new Node(2);
let a2 = new Node(1);
let a3 = new Node(5);
a1.next = a2;
a2.next = a3;

let b1 = new Node(5);
let b2 = new Node(9);
let b3 = new Node(2);
b1.next = b2;
b2.next = b3;


 /* step() function recursively iterates through a ListNode linked list */
 const step = (l1, l2, carry=0) => {
  /* l1 or l2 can be null - double bang to cast to bool for null check */
  const sum = (!!l1 ? l1.val : 0) + (!!l2 ? l2.val : 0) + carry
  let listnode = new ListNode(sum)

  /* if either l1.next exists or l2.next exists */
  if ((!!l1 && !!l1.next) || (!!l2 && !!l2.next)) {
      listnode.next = step(
          !!l1 ? l1.next : null, 
          !!l2 ? l2.next : null, 
          sum > 9 ? 1 : 0
      )
  } else if (sum > 9) {
      /* final carry */
      listnode.next = new ListNode(1)
  }

  /* only keep LSD */
  listnode.val = parseInt(listnode.val.toString().slice(-1))
  return listnode
}

return step(l2, l1)
};
*/