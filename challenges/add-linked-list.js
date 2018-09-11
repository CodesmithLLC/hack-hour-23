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

function addLinkedList(listOne, listTwo) {

  //create a result list
  let result = new Node();

  //iterate thru while L1,
  //also move through L2
  let nodeOne = listOne;
  let nodeTwo = listTwo;
  let carry = 0;
  while(nodeOne && nodeTwo){
    //create a sum with the corresponding node of L2
    let sum = nodeOne.value + nodeTwo.value + carry;
      //when sum is >9, carry a 1 to the next iteration
      if(sum>9){
        //use the remainder from %10 for the value
        sum = sum%10;
        carry = 1;
      }else{
        carry = 0;
      }
      
    //add the sum as a node value to the result list
      result.value = sum;
      result.next = new Node();
    //go to the next node of each list
    nodeOne = nodeOne.next;
    nodeTwo = nodeTwo.next;
    result = result.next;
  }
  

  //verify we are at the end of the lists.
  if(nodeOne){
    while(nodeOne){
      result.value = nodeOne + carry;
      result.next = new Node();
      result = result.next;
      nodeOne = nodeOne.next;
      carry = 0;
    }
  }else if(nodeTwo){
    while(nodeTwo){
      result.value = nodeTwo +carry;
      result.next = new Node();
      result = result.next;
      nodeTwo = nodeTwo.next;
      carry = 0;
    }
  }
  //throwing the rest of the nodes on to the result
  
  result.next = null;
  return result;

}

module.exports = {Node: Node, addLinkedList: addLinkedList};
