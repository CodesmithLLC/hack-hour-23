// /**
//  * Create a stack.Then create a queue using two stacks.
//  */

// class Stack {
//   constructor() {
//     this.members = [];
//   }

//   pop() {
//     return this.members.pop();
//   }
//   push(element) {
//     return this.members.push(element);
//   }
// }

// /**
//  * Queue Class
//  */

// class Queue {
//   constructor() {
//     this.leftStack = new Stack();
//     this.rightStack = new Stack();
//     this.rightCanAccept = true;
//     this.rightFirstOut = true;
//   }

//   enqueue(element) {
//     if (this.rightCanAccept) {
//       this.rightStack.push(element);
//     } else {
//       this.leftStack.push(element);
//     }
//     this.inToggle();
//   }

//   dequeue() {
//     let numMoved = 0;
//     let result;
//     if (this.rightFirstOut) {
//       //pop off the right side, pushing each to the left
//       while (this.rightStack.members.length > 1) {
//         this.leftStack.push(this.rightStack.pop());
//         numMoved++;
//       }

//       //when only one left on the right, pop and return it
//       result = this.rightStack.pop();

//       //reset the queue
//       for (let i = 0; i < numMoved; i++) {
//         this.rightStack.push(this.leftStack.pop());
//       }
//     } else {
//       //pop the left
//       while (this.leftStack.members.length > 1) {
//         this.rightStack.push(this.leftStack.pop());
//         numMoved++;
//       }

//       //when only one left on the left, pop and return it
//       result = this.leftStack.pop();

//       //reset the queue
//       for (let i = 0; i < numMoved; i++) {
//         this.leftStack.push(this.rightStack.pop());
//       }
//     }
//     this.outToggle();
//     return result;
//   }

//   inToggle() {
//     this.rightCanAccept = this.rightCanAccept ? false : true;
//   }

//   outToggle() {
//     this.rightFirstOut = this.rightFirstOut ? false : true;
//   }
// }

// module.exports = { Stack: Stack, Queue: Queue };
