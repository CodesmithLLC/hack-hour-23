function Stack() {

  this.store = {};

  this.counter = 0;

  this.max;

  this.formerMax;

  this.getMax = () => Object.keys(this.max);

  this.push = (val) => {
    this.store[this.counter] = val;
    if (this.max && Object.keys(this.max)[0] === val.toString()) this.max[val]++
    if (!this.max || Object.keys(this.max)[0] < val) {
      this.formerMax = this.max;
      this.max = { [val]: 1 }
    }
    this.counter++
    return this.counter;
  }

  this.pop = () => {
    if (this.store[this.counter-1].toString() === Object.keys(this.max)[0]) {
      this.max[this.store[this.counter-1]]--
      if (this.max[this.store[this.counter-1]] === 0) this.max = this.formerMax;
    }
    delete this.store[this.counter - 1];
    this.counter--;
    return this.counter;
  }
}

module.exports = Stack;