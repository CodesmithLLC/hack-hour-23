/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {

    this.count = 0;
    this.storage = [];

    this.push = (num) => {
        this.storage[this.count] = num;
        this.count++
        this.storage[count] = undefined;
    }

    this.pop = () => {
        let popNum = this.storage[this.count-1]
        this.count--
        return popNum
    }
}


/**
* Queue Class
*/


function Queue() {

    let stack1 = new Stack;
    let stack2 = new Stack;

    stack1.push(2)
    console.log(stack1)

}

module.exports = {Stack: Stack, Queue: Queue};
