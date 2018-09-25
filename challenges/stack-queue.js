/**
 * Create a stack.Then create a queue using two stacks.
 */

class Stack {
    constructor () {
        this.storage = {};
        this.length = 0;
    }

    push (val) {
        this.storage[this.length++] = val;
        return  this.length - 1;
    }

    pop () {
        let temp = this.storage[--this.length];
        delete this.storage[this.length];
        return temp;
    }
}


/**
* Queue Class
*/


class Queue {
    constructor () {
        this.stack1 = new Stack();
        this.stack2 = new Stack();

        this.length = 0;
        this.firstStack = true;
    }

    enqueue (val) {
        this.length++;
        if(!this.firstStack) {
          for(let i = 0; i < this.length; i++) {
              this.stack1.push(this.stack2.pop())
          }
          this.firstStack = true;
        }
        this.stack1.push(val)
        return this.length;
    }

    dequeue () {
        if(this.firstStack) {
          for(let i = 0; i < this.length; i++) {
              this.stack2.push(this.stack1.pop())
          }
          this.firstStack = false;
        }
        this.length --;
        return this.stack2.pop();
    }

}

module.exports = {Stack: Stack, Queue: Queue};
