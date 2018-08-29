/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = [];
  this.push = (el) => {
    this.stack[this.stack.length] = el
    return this.stack.length
  }
  this.pop = () => {
    let output = this.stack[this.stack.length-1]
    this.stack.length = this.stack.length-1
    return output
  }
}

/**
* Queue Class
*/


function Queue() {

}

module.exports = {Stack: Stack, Queue: Queue};
