/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.count = 0;
  this.max = -Infinity;
  this.storage = [];
}

Stack.prototype.push = (input) => {
  if (input > this.max) this.max = input;
  this.storage.push(input);
  this.count += 1;
};

Stack.prototype.pop = () => {
  const temp = this.storage.pop();
  this.max = Math.max(...this.storage);
  return temp;
};

Stack.prototype.getMax = () => this.max;

module.exports = Stack;
