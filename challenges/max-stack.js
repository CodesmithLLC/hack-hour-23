/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage ={}
  this.index = 0;
}
Stack.prototype.push = function(value) {
  this.storage[this.index] = value
  this.index++
}
Stack.prototype.pop = function(){
  if(this.index){
    const last = this.storage[this.index]
    delete this.storage[this.index]
    this.index--
    return last
  }
Stack.prototype.getMax = function(){
  let largest = this.storage[0]
  for(let key in this.storage) {
     if(this.storage[key] > largest)  {
       largest = this.storage
     }
     return largest;
  }
}
}

module.exports = Stack;