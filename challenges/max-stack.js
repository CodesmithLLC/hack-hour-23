/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.max;
  return this.stack = [];
}

Stack.prototype.push = function(el) {
  this.stack.push(el);
  this.max = this.stack.reduce((acc, cur) => {
    if ( cur > acc ) return acc = cur
    return acc
  }, 0)
  console.log(this.max)
  return this.stack.length;
}

Stack.prototype.pop = function() {
  const value = this.stack.pop()
  this.max = this.stack.reduce((acc, cur) => {
    if ( cur > acc ) return acc = cur
    return acc
  }, 0)
  console.log(this.max)
  return value;
}

Stack.prototype.getMax = function() {
  return this.max;
}

module.exports = Stack;
