/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array) || array.length < 3) return 0;
  return array.sort((a,b) => b - a).slice(0,3).reduce( (a,b) => a * b, 1)
}


module.exports = highestProduct;
