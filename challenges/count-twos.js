// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  //after the first two, the next one is always 10 away...?
  //2->12->20s->32->42->52->62...->102
  let cache = {};
  function countInner (){
    if (num in cache){
      return cache[num]
    }else{
      for(let i = 1; i<= num; i++){
        let count = 0;
        if(cache[i-1]){
          count = cache[i-1];
        }
        let numStr = String(i);
        count += (numStr.match(/2/g) || []).length;
        cache[i] = count;
      }
      return cache[num];
    }
  }
  return countInner;
  
}

let x = countTwos(11420);
console.log(x());

module.exports = countTwos;
