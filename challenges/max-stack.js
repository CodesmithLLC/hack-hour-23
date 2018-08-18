/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  const stack = [];
  const max = -Infinity;
}

  Stack.prototype.push = value => {
     if (value > this.max) this.max = value;
     return this.stack.push(value);
  }
  
  Stack.prototype.pop = () => {
    if (size < 1) return undefined;
    const result = this.stack.pop();
    if (result === this.max) this.max = Math.max(this.stack);
    return result;
  }
  Stack.prototype.getMax = () => {
    return this.max;
  }

}




module.exports = Stack;
