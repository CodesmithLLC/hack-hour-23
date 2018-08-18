/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

class Stack{
  constructor(array){
    this.stack = array;
    this.max = array[0]
    for (let i = 1; i < array.length; i += 1){
      if (array[i] > array[0]) this.max = array[i]
    } 
  }
  push(num){
    this.stack[this.stack.length] = num;
    if (num > this.max) this.max = num;
    return this.stack.length; 
  }
  pop(){
    const tempArr = [];
    this.max = this.stack[0]; 
    for (let i = 0; i < this.stack.length - 1; i += 1){
      tempArr.push(this.stack[i])
      if (this.stack[i] > this.max) this.max = this.stack[i]
    }
    const temp = this.stack[this.stack.length-1]
    this.stack = tempArr; 
    return temp; 
  }
  getMax(){
    return this.max
  }
}

module.exports = Stack;