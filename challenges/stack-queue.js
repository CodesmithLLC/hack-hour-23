function Stack() {
  this.store = [];
  this.push = function(val) {
    this.store.push(val);
    this.length = this.store.length
  }
  this.pop = function() {
    const res = this.store.pop();
    this.length = this.store.length
    return res;
  }

  this.shift = function() {
    const res = this.store.shift();
    this.length = this.store.length;
    return res;
  }
  this.length = this.store.length
}


/**
* Queue Class
*/


function Queue() {
  this.store = [new Stack(), new Stack()];
  this.push = function(val) {
    if (this.store[0].length === 0 && this.store[1].length === 0) {
      this.store[0].push(val);
      return;
    }
    if (this.store[0].length > 0) {
      while (this.store[0].length > 0) {
        this.store[1].push(this.store[0].shift());
      }
      this.store[1].push(val);
      return;
    }
    if (this.store[1].length) {
      while (this.store[1].length) {
        this.store[0].push(this.store[1].shift());
      }
      this.store[0].push(val);
    }
  }

  this.pop = function() {
    this.store[0].length ? this.store[0].pop() : this.store[1].pop()
  }
}

module.exports = {Stack: Stack, Queue: Queue};
