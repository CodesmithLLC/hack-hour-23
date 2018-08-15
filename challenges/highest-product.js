/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  //sort array 
  //if 2 big negatives, use them
  //track whether the number was originally negative
  return array.sort((a, b) => a - b).slice(array.length - 3).reduce((c, d) => c * d);
}

console.log(highestProduct([-20, -30, 8, 5, 10])); // should return 6000
module.exports = highestProduct;
