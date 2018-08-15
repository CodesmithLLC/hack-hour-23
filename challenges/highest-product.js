/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  return array.sort().slice(-3).reduce( (a,b) => a * b, 1)
}


module.exports = highestProduct;
