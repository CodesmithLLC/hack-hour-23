/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.obj = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.obj[this.index++] = value;
}

Stack.prototype.pop = function() {
  if(this.index === 0){
    return undefined;
  }else {
    const deleted = this.obj[this.index-1];
    delete this.obj[this.index-1];
    this.index--;
    return deleted;
  }
}

/**
* Queue Class
*/


function Queue() {
  this.holderOne = new Stack();
  this.holderTwo = new Stack();
  this.length = 0;
}

Queue.prototype.enqueue = function(value) {
  if(this.length === 0) {
    this.holderOne[this.length++] = value;
  }else {
    for(let i = 0; i < this.length; i++) {
      console.log('holder one', this.holderOne[0]);
      // console.log('wtfffff', this.holderOne.pop());
      const popped = this.holderOne.pop();
      // console.log('popped', popped);
      this.holderTwo.push(popped);
    }

    console.log('value of holdertwo', this.holderTwo[0]);
    
    this.holderOne.push(value);
    this.length += 1;
    
    for(let i = 0; i < this.length - 1; i++) {
      this.holderOne.push(this.holderTwo.pop());
    }
  }
}

Queue.prototype.dequeue = function() {
  if(this.index === 0) {
    return undefined;
  }else {
    this.index--;
    return this.holderOne.pop();
  }
}

// module.exports = {Stack: Stack, Queue: Queue};

let q = new Queue();
q.enqueue(1);
q.enqueue(2);


