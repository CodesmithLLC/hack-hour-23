/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack(array) {
  // body...
  //when pushing, check if bigger than currentMax value, if so, update
  
  let stack = array;
  let sortedStack;
  let currentMax = -Infinity;
  return {
    pusH(num) {
      stack.splice(stack.length, 0, num);
      sortedStack = stack.sort((a, b) => b - a);
      currentMax = sortedStack[0];
      return stack.length;
    },
    popp() {
      console.log('stack', stack)
      let popped = stack.splice(stack.length - 1, 1);
      sortedStack = stack.sort((a, b) => b - a);
      console.log(popped);
      currentMax = sortedStack[0];
      return popped;
    },
    getMax() {
      return currentMax;
    }
 }
};
// console.log(Stack([1, 2, 3]).pusH(4));
// console.log(Stack().getMax());

module.exports = Stack;