/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
	this.stack = new Array();
}

Stack.prototype.push = function (toBePushed) {
	this.stack[this.stack.length] = toBePushed;
}
Stack.prototype.pop = function () {
  ret = this.stack[this.stack.length - 1];
  this.stack.splice(this.stack.length - 1, 1);
  return ret;
}

Stack.prototype.getMax = function () {
  this.stack.sort();
  return (this.stack[this.stack.length - 1]);
}

// let stack = new Stack();
// console.log(stack);
// stack.push(1);
// console.log(stack);
// stack.push(2);
// console.log(stack);
// stack.push(9);
// console.log(stack);
// stack.push(3);
// console.log(stack);
// stack.push(4);
// console.log(stack);
// stack.push(5);
// console.log(stack);
// stack.pop();
// console.log(stack);
// console.log(stack.getMax())

module.exports = Stack;