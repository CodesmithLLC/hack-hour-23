function Stack() {
  this.storage = [];
  this.max = 0;
  this.push = (val) => {
    this.storage.push(val);
    if(val > this.max) this.max = val;
    return this.storage.length;
  }

  this.pop = () => {
    let popped = this.storage[this.storage.length-1];

    this.storage.pop();

    if(this.max === popped){
      for(let i of this.storage){
        if(i > this.max) this.max = i;
      }
    }

    return popped;
  }

  this.getMax = () => {
    return this.max;
  }

}
