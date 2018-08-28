/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack(array) {
  //create stack
  return array;
}


/**
* Queue Class
*/


function Queue(stackArr1, stackArr2) {
  //call stack twice?
  const stack1 = stackArr1;
  const stack2 = stackArr2;
  //queue in order of first stack?
  //if stack2 is empty, add to stack2 from popping stack1
  if (stack2.length === 0) {
    if (stack1.length === 0) {
      return [];
    } 
    while (stack1.length > 0) {
      let temp = stack1.pop();
      stack2.push(temp);
    }
  }
  //if stack2 is not empty, return stack2.pop();
  if (stack2.length > 0) return stack2.pop();
}

module.exports = {Stack: Stack, Queue: Queue};
