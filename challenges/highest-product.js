/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let workable = array.slice();
  let producers = []
  while(producers.length < 3){
    producers.push(workable.splice(workable.indexOf(Math.max(...workable)),1));
  }
  return producers.reduce((acc,curr)=> acc *= curr);
}

module.exports = highestProduct;
