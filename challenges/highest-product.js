/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array) || array.length < 3) {
    return 0;
  } 
  array.sort((a, b) => a < b);
  if (array[array.length - 1] < 0 && array[array.length - 2]) {
    array[array.length - 1]  = array[array.length - 1] * -1;
    array[array.length - 2]  = array[array.length - 2] * -1;
    array.sort((a, b) => a < b);
  }
  return array[0] * array[1] * array[2];
}


module.exports = highestProduct;
