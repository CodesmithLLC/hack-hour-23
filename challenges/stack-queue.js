/**
 * Create a stack. Then create a queue using two stacks.
 */


function Stack() {
    this.storage = [];
    this.push = (val) => {
        this.storage[this.storage.length] = val;
    }

    this.pop = () => {
        let popped = this.storage[this.storage.length - 1]
        this.storage[this.storage.length - 1] = undefined;
        return popped;
    }


}


/**
* Queue Class
*/


function Queue() {
    this.storageStack = new Stack;
    this.tempStack = new Stack;

    this.enqueue = (val) => {
        this.storageStack.push(val);
    }

    this.dequeue = () => {
        let popped = this.storageStack.pop();
        while(popped){
            this.tempStack.push(popped);
            popped = this.storageStack.pop();
        }
        this.tempStack.pop();
        let tempPopped = this.tempStack.pop();
        while(tempPopped){
            this.storageStack.push(popped);
            popped = this.tempStack.pop();
        }
    }
}

module.exports = {Stack: Stack, Queue: Queue};
