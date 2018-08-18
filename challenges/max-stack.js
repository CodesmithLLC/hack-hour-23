/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = [];
  this.max = [0, 0];
}

// push returns the new length of the stack
Stack.prototype.push = function(stack) {
  // add the new stack to the array and return the length
  if (this.stack[0] === undefined) {
    this.stack[0] = stack;
    return 1;
  } else {

    let i = 0;
    while (this.stack[i] !== undefined) {
      i++;
    }
    this.stack[i] = stack;

    if (typeof stack === 'number' && stack > this.max[0]) {
      this.max[0] = stack;
    }
    if (typeof stack === 'number' && stack > this.max[1]) {
      this.max[1] = stack;
    }

    return i + 1;
  }
}

// pop returns the element that was just removed
Stack.prototype.pop = function() {

  if (this.stack.length !== 0) {
    const lastElement = this.stack[this.stack.length - 1];

    if (lastElement === this.max[0]) {
      this.max[0] = this.max[1];
      this.max[1] = 0;
    }

    if (lastElement === this.max[1]) {
      this.max[1] = 0;
    }

    this.stack = this.stack.slice(0, this.stack.length - 1);
    return lastElement;
  } else {
    throw new Error('Invalid');
  }
}

// getMax should return the largest value currently in the stack
// the getMax method should retrieve the max value from the stack in O(1) time - constant. 
Stack.prototype.getMax = function() {
  return this.max[0];
}

module.exports = Stack;