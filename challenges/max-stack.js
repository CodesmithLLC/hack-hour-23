/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  function push(array, element) {
   array[array.length] = element;
   return array.length;
  }
  function pop() {
    const newArr = [];
    for (let i = 0; i < greg.length -1; i += 1) {
      newArr[i] = greg[i]
    }
  }
  function getMax(array) {

  }
  
}

module.exports = Stack;