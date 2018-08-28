/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  class StackClass{
    constructor(){
      this.storage = []
    }
    add(num){
      this.storage[this.storage.length] = num; 
    }
    remove(){
      let temp = [];
      const removedValue = this.storage[this.storage.length-1]
      for (let i = 0; i < this.storage.length -1; i += 1){
        temp.push(this.storage[i])
      }
      this.storage = temp
      return removedValue
    }
  }
  const newStack = new StackClass()
  return newStack
}


/**
* Queue Class
*/


function Queue() {
  class QueueClass{
    constructor(){
      this.storage = []; 
      this.stack1 = Stack();
      this.stack2 = Stack(); 
    }
    qAdd(num){
      if (this.storage.length === 0) {
        this.stack1.add(num)
        this.storage = this.stack1.storage; 
      }

      //stack2 is empty, add normally to stack1
      if (this.stack2.storage.length === 0){
        this.stack1.add(num);
        this.storage = this.stack1.storage; 
      }

      //stack1 is empty
      if (this.stack1.storage.length === 0){
        this.stack1.add(num)
        this.stack2.storage.forEach(num => {
          this.stack1.add(this.stack2.pop())
        })
        this.storage = this.stack1.storage; 
      }
    }
    qRemove(num){
      //no items in queue
      if(this.storage.length === 0){
        return undefined
      }

      //no items in stack 2
      else if (this.stack2.storage.length === 0){
        for (let i = 1; i < this.stack1.storage.length; i += 1) {
          this.stack2.add(this.stack1.remove())
        }
        this.storage = this.stack2.storage; 
        return this.stack1.remove(); 
      }

      //no items in stack 1, reversed order
      else if (this.stack1.storage.length === 0){
        const returnValue = this.stack2.remove();
        for (let i = 0; i < this.stack2.storage.length; i += 1){
          this.stack1.add(this.stack2.remove())
        }
        this.storage = this.stack1.storage;
        return returnValue
      }
    }
  }
  const newQueue = new QueueClass()
  return newQueue
}

const newQ = Queue();
newQ.qAdd(2)
newQ.qAdd(3)
newQ.qAdd(4)
console.log(newQ.qRemove())
console.log(newQ.qRemove())

console.log(newQ)



module.exports = {Stack: Stack, Queue: Queue};
