/**
 * Create a stack.Then create a queue using two stacks.
 */


class Stack {
  //create stack
  constructor() {
    this.array = [...arguments];
  }
  add(input) {
    this.array.push(input);
  }
  remove() {
    this.array.pop();
  }
}

/**
* Queue Class
*/
const stack1 = new Stack(3, 4, 5);
const stack2 = new Stack();
console.log(stack1);

class Queue extends Stack {
  //call stack twice?
  constructor() {
    super();
    this.stack1 = stack1;
    this.stack2 = stack2;
    this.queue = [];
  }
  createQueue() {
    if (this.stack2.length === 0) {
      if (this.stack1.length === 0) {
        return [];
      } 
      while (stack1.length > 0) {
        let temp = stack1.remove();
        stack2.add(temp);
      }
    }
  //if stack2 is not empty, return stack2.pop();
    while (stack2.length > 0) {
      this.queue.add(stack2.remove());
    }
    return this.queue;
  }
}
console.log(Queue.createQueue());


module.exports = {Stack: Stack, Queue: Queue};
