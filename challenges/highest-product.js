/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let product = 0;

  // sort array of numbers
  // return the product of the 3 highest numbers
  array.sort((a, b) => a - b);

  return array[array.length - 1] * array[array.length - 2] * array[array.length - 3];
}
// console.log(highestProduct([4, 3, 100, 2, 7, 9, 2]));

module.exports = highestProduct;
