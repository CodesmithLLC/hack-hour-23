/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = [];
  this.max = [];
  this.length = 0;

  this.push = this.push.bind(this);
  this.pop = this.pop.bind(this);
  this.getMax = this.getMax.bind(this);
}

Stack.prototype.push = function (val) {
  this.storage[this.length++] = val;
  if(this.max[this.max.length - 1] > val){
    this.max.push(val);
  } else {
    this.max.push(val);
    this.max.sort((a, b) => a - b);
  }
  return this.length;
}

Stack.prototype.pop = function () {
  let temp = this.storage[--this.length];
  this.storage[this.length] = undefined;
  this.max.splice(this.max.indexOf(temp), 1);
  return temp;
}

Stack.prototype.getMax = function () {
  return this.max[this.max.length - 1];
} 

module.exports = Stack;