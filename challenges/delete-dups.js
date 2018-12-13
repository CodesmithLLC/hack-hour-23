/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */
function Node(val) {
  this.val = val;
  this.next = null;
}


function deleteDups(head) {
  const arr = [];
  console.log(head.val);
  while (head) {
    arr.push(head.val);
  }
}
const linkedList = new Node(1);
linkedList.next = new Node(2);
linkedList.next.next = new Node(2);
linkedList.next.next.next = new Node(3);
linkedList.next.next.next.next = new Node(2);
deleteDups(linkedList);
module.exports = deleteDups;



//   // create Set of unique values
//   const values = new Set();
//   // define current node that will go through list
//   let curr = head;
//   // define last safe node: refers to most recent unique value
//   let safe;
  
//   // loop through list with curr
//   while (curr) {
//     // if curr.value is in set, remove curr from list
//     if (values.has(curr.value)) {
//       safe.next = curr.next;
//     }
//     // if curr.value is not in set, add it to set, and redefine safe node
//     else {
//       values.add(curr.value);
//       safe = curr;
//     }
//     // always advance current node
//     curr = curr.next;
//   }
// }

// function deleteDups(head) {
//   // define main node
//   let main = head;
  
//   // loop through list with main node
//   while (main) {
//     // define forward node
//     let forward = main;
    
//     // loop through list with forward node
//     while (forward.next) {
//       // if main value equals forward's next's value, remove forward's next node
//       if (main.value === forward.next.value)
//         forward.next = forward.next.next;
//       // otherwise, go to next forward node
//       else
//         forward = forward.next;
//     }
//     // always advance main node
//     main = main.next;
//   }
// }