/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */


function Stack() {
  this.output = [];
  this.outputLength = 0;
}

Stack.prototype.push = (val) => {
  this.output[this.outputLength] = val;
  return this.outputLength += 1;
  
}

Stack.prototype.pop = () => {
  let lastVal = this.output[this.outputLength];
  delete this.output[this.outputLength];
  this.outputLength -= 1;
  return lastVal
}

Stack.prototype.getMax = () => {
  return this.output.sort((a,b) => a > b)[0]
}
module.exports = Stack;