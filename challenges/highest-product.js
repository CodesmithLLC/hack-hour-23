/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let product1 = 0;
  let product2 = 0;

  // handle array less than 3 integers and input of not array
  if (array.length < 3) {
    return 0;
  }
  if (!Array.isArray(array)) {
    return 0;
  }

  // sort array of numbers
  array.sort((a, b) => a - b);

  // if there are two negative numbers
  if (array[0] < 0 && array[1] < 0) {
    product1 = array[0] * array[1] * array[array.length - 1];
  }
  // else return product of 3 highest positive integers
  product2 = array[array.length - 1] * array[array.length - 2] * array[array.length - 3];

  return product1 > product2 ? product1 : product2;
}
// console.log(highestProduct([-1]));

module.exports = highestProduct;
