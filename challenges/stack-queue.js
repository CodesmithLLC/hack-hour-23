/**
 * Create a stack.Then create a queue using two stacks.
 */


class Stack {
  constructor() {
    this.stack = {};
    this.length = 0;
  }

  push(stack) {
    this.stack[this.length] = stack;
    this.length += 1;
  }

  pop() {
    const poppedStack = this.stack[this.length - 1];
    delete this.stack[this.length - 1];
    this.length -= 1;
    return poppedStack;
  }
}


/**
* Queue Class
*/


class Queue {
  constructor() {
    this.stack = new Stack();
    this.stack2 = new Stack();
  }

  // empty contents from stack into stack 2
  emptyFirstStack() {
    if (this.stack.length !== 0) { // check to stack must have elements in there to empty
      this.stack2.push(this.stack.pop());
    }
  }

  emptySecondStack() {
    while (this.stack2.length !== 0) { // stack2 must have elements
      return this.stack2.pop();
    }
  }
}

module.exports = {Stack: Stack, Queue: Queue};
