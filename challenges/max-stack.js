/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  const array = [];
  Stack.prototype.push = (element) => {
    array[array.length] = element;
    return array;
  }

  Stack.prototype.pop = () => {
    return array.splice(-1);
  }

  Stack.prototype.getMax = () => {
    array.sort((a, b) => b - a);
    return array[0]
  }
}

module.exports = Stack;