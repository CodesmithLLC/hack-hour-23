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
  this.storage = {};
}

// Adds value onto end of stack
Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
}

// Removes and returns value at end of stack
Stack.prototype.pop = function() {
  // Check if stack is empty
  if (this.count === 0) {
    return undefined;
  }

  this.count--;
  const result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
}

Stack.prototype.getMax = function() {
  let values = (Object.values(this.storage));
  values.sort(function(a, b) {
    return b - a;
  });
  return values[0];
}

module.exports = Stack;