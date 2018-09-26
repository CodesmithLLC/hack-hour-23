/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array)) return 0;
  if (array.length < 3) return 0;
  let product = array[0] * array[1] * array[2];

  let i = 0, j = 0, k = 0;
  while (i < array.length - 2) {
    j = i + 1;
    while (j < array.length - 1) {
      k = j + 1;
      while (k < array.length) {
        if (array[i] * array[j] * array[k] > product) {
          product = array[i] * array[j] * array[k];
        }
        k++;
      }
      j++;
    }
    i++;
  }
  return product;
}

// console.log(highestProduct([1,2,3,4,5])); // => 60?
// console.log(highestProduct([1,4,2,3,5])); // => 60?
console.log(highestProduct([1,4,5]));
console.log(highestProduct([-1,-4,-5]));




module.exports = highestProduct;
