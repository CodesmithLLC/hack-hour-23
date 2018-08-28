/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.values = [];
}

Stack.prototype.push = function(num) {
  return this.values.push(num);
};

Stack.prototype.pop = function() {
  return this.values.pop();
};

/**
 * Queue Class
 */

function Queue() {
  this.stack = new Stack();
}

Queue.prototype.enqueue = function(num) {
  return this.stack.push(num);
};

Queue.prototype.dequeue = function() {
  return this.stack.values.splice(0, 1);
};

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(3);
queue.dequeue();
console.log('queue ===>', queue.stack.values);

module.exports = { Stack: Stack, Queue: Queue };
