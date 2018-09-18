/**
 * Create a stack.Then create a queue using two stacks.
 */


/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.size = 0;
  this.storage = {};

  this.push = () => {
    this.storage[this.size] = data;
    this.size += 1; 
  }

  this.pop = data => {
    if (this.size < 1) {
      return undefined
    } 

    const numToReturn = this.storage[this.size - 1];
    delete this.storage[this.size - 1];
    return numToReturn; 
  }
}


/**
* Queue Class
*/


function Queue() {
  //remove from front of queue and add to back of queue
  
  this.queueArray = [];

  this.add = (stack1, stack2) => {
    let newStack1 = stack1;
    let newStack2 = stack2;
    let stackIndexCounter = 0;
    let whichStack = 0;
    let queueArraySize = 0;

    while (newStack1.length > 0 && newStack2.length > 0) {
      if (whichStack === 0) {
        this.queueArray.push()
        whichStack += 1;
      } else {

      }
    }
    return this.queueArray.push(data);
  }

  this.remove = () => {
    return this.queueArray.shift()
  }
}


// const stack1 = new Stack();
// const stack2 = new Stack();
// stack1.push('colin');
// stack2.push('alex');
// stack1.push('paige');
// stack2.push('hart');
// stack2.pop('hart');

// console.log(stack1);
// console.log(stack2);

// const queue1 = new Queue();
// queue1.add('colin');
// queue1.add('joe');
// queue1.add('someone');
// queue1.remove()
// console.log(queue1)


module.exports = {Stack: Stack, Queue: Queue};
