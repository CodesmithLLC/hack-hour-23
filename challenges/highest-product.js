/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  // edge case: check if array is an array
  if (!Array.isArray(array)) return 0;
  // edge case: less than 3 numbers
  if (array.length < 3) return 0;
  // input: array of integers
  const result = array;
  const productArr = [];
  // loop: find index of max value 3 times and splice each time
  for (let i = 0; i < 3; i++) {
    productArr.push(...result.splice(result.indexOf(Math.max(...result)), 1));
  }
  // output: highest product of three numbers in the input array
  return productArr[0] * productArr[1] * productArr[2];
}

module.exports = highestProduct;
