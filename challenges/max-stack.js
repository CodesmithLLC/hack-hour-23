/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  const stack = [];
  let length = 0;
  let max;
  return {
    push: function(num) {
      if (length === 0) max = num;
      else if (num > max) max = num;
      stack.push(num);
      return ++length;
    },
    pop: function() {
      if (length > 0) {
        length--;
        const temp = stack.pop();
        if (temp !== max) return temp;
        else {
          max = stack.reduce((acc, val) => {
            if (acc < val) return val;
            else return acc;
          })
          return temp;
        }
      } else {
        return -1;
      }
    },
    getMax: function() {
      return max;
    }
  }
}

let stack = Stack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(10));
console.log(stack.push(7));
console.log(stack.getMax());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.getMax());

module.exports = Stack;