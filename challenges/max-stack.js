/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = [];
  this.size = 0;
  this.max = -Infinity;
}

Stack.prototype.push = function(value) {
  if (value > this.max) this.max = value;
  this.stack[this.size] = value;
  return this.size++;
};

Stack.prototype.pop = function() {
  if (this.stack.length < 1) return undefined;
  const result = this.stack[--this.size];
  this.stack.splice(-1);
  if (result === this.max) this.max = Math.max(this.stack);
  return result;
};

Stack.prototype.getMax = function() {
  if (!this.stack.length) return undefined;
  return this.max;
};

module.exports = Stack;
