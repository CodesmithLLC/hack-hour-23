/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  // push returns new length of the stack
  // pop should return element that was removed
  // should return the largest value in the stack
    // should be able to retrieve the maximum value form the stack in constant time
  this.arr = [];
  this.push = (value) => {
    this.arr.push(value);
    return this.arr.length;
  };
  this.pop = () => {
    if(!this.arr.length) return undefined;
    return this.arr.shift();
  }
  this.getMax = () => {
    if(this.arr.length){
      const tempArr = Object.assign([], this.arr);
      tempArr.sort((a, b) => { return a - b});
      console.log(tempArr);
      return tempArr[tempArr.length - 1];
    }
    return undefined;
  }
}

class Stack {
  constructor(){
    this.storage = {};
    this.length = 0;
    this.maxValue = 0;
  }

  push(value) {
    this.storage[this.length++] = value
  }

  pop() {
    if(this.length !== 0) {
      const deletedValue = this.storage[0];
      delete this.storage[0];
      return deletedValue;
    }
    return undefined;
  }

  getMax() {
    
  }
}

// let s = new Stack();
// // console.log(stack);
// console.log(s.push(3));
// console.log(s.push(50));
// console.log(s.push(2));
// console.log(s.push(1));
// console.log(s.push(73));
// console.log(s.push(100));
// console.log(s.getMax());
// // console.log(s.pop());



module.exports = Stack;