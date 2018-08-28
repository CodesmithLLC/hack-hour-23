/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
    this.storage = {};
    this.size = -1;
};

Stack.prototype.push = function(value) {
    this.size++;
    this.storage[this.size] = value;
};

Stack.prototype.pop = function() {
    if(this.size >= 0){
      const last = this.storage[this.size];
      delete test.storage[this.size];
      this.size--;
      return last;
    }
    return undefined
};

/**
* Queue Class
*/

function Queue() {
    this.storage = [];
    this.size = -1;
}

Queue.prototype.enqueue = function(value) {
    this.size++;
    this.storage[this.size] = value;
  };
  
  Queue.prototype.dequeue = function() {
    if (this.size >= 0) {
    const first = this.storage[0]
    delete this.storage[0]
    this.size--
    return first
    }
    return undefined;
  };
  
module.exports = {Stack: Stack, Queue: Queue};
