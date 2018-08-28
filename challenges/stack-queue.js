/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
}

Stack.prototype.push = function(item) {this.storage.push(item)}
Stack.prototype.pop = function() {return this.storage.pop()}

/**
* Queue Class
*/


function Queue() {
  const input = new Stack();
  const output = new Stack();

  Queue.prototype.push = function(item) {
    input.push(item);
    };
  Queue.prototype.shift = function() {
    input.storage.forEach(e => output.storage.push(input.storage.pop()));
    return output.storage.pop();
  };
}

module.exports = {Stack: Stack, Queue: Queue};
