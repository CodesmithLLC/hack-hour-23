/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // stack
  this.storage = [];
  
  // add element to the end of storage / return the new length
  this.push = (...element) => {
    console.log("concat", ...element)
    
    // when parameter is 'element', not '...element'
    // this.storage[this.storage.length] = element 
    // return this.storage.length;
    this.storage.concat(...element)
    console.log(this.stoage)
  };

  this.pop = () => {
    // return this.storage.splice(0, 1)

    //new approach
    //holder stores first element of this.storage
    let holder = this.storage[this.storage.length-1];
    const newArr = [];
    for(let i=0; i<this.storage.length-1; i++){
      newArr[i] = this.storage[i];
    }
    this.storage = newArr;
    return holder;
  };

  this.getMax = () => {
    // let max = this.storage[0];
    // for(let i=1; i<this.storage.length; i++){
    //   if(max < this.storage[i]) max = this.storage[i];
    // }
    // return max;
  };
}

const stack = new Stack;

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6, 7, 8)
console.log('stack.storage', stack.storage)
// console.log(stack.getMax())
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
console.log(stack.storage)

module.exports = Stack;