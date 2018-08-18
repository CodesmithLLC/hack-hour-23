/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.array = [];
  Stack.prototype.push = (element) => {
    this.array[this.array.length] = element;
    return this.array;
  }

  Stack.prototype.pop = () => {
    return this.array.splice(-1);
  }

  Stack.prototype.getMax = () => {
    this.array.sort((a, b) => b - a);
    return this.array[0]
  }
}

module.exports = Stack;