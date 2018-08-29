/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  const stack = [];
  this.push = (el) => {
    stack[stack.length-1] = el
  }
}


/**
* Queue Class
*/


function Queue() {

}

module.exports = {Stack: Stack, Queue: Queue};
