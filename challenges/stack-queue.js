/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.stack = {};
    this.storage = 0;
    
}

Stack.prototype.push = function(data) { 
    let storage = this.storage++;
    this.storage[size] = data
}

Stack.prototype.pop = function(data) {
    let size = this.data.size
    let deletedData

    deletedData = this.storage[size];
    this.size--
    return deletedData
}


function Queue() {
    stack1 = new Stack();
    stack2 = new Stack();

}

module.exports = {Stack: Stack, Queue: Queue};
