/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if(!Array.isArray(array) || array.length<3){
    return 0;
  }
  let workable = array.slice();
  let allPositive = workable.map(x => Math.abs(x));
  let producers = [];
  while(producers.length < 2){
    let absMaxIdx = allPositive.indexOf(Math.max(...allPositive));
    producers.push(Math.abs(workable.splice(absMaxIdx,1)));
    allPositive.splice(absMaxIdx,1);
  }
  producers.push(Math.abs(workable.splice(workable.indexOf(Math.max(...workable)),1)));
  
  return producers.reduce((acc,curr)=> acc *= curr);
}

console.log(highestProduct([-3,-3,-3,1,1,1,1,2,2]))

module.exports = highestProduct;
