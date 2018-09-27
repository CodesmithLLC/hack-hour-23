/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  const output = [];
  let counter = 0;
  while (counter !== array.length) {
    output.push(array.slice(1).reduce((initial, curr) => initial * curr))
    array.push(array[0]);
    array.shift();
    counter++;
  }
  return output
}

module.exports = getAllProducts;
