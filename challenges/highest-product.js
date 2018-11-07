/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 // approach: sort the array and then take the last three elements and multiply the together.
 // tools: sort method to get the array into lowest to highest.
const highestProduct = (array) => {
  let newArray = array.sort();
  return newArray[array.length - 1] * newArray[array.length - 2] * newArray[array.length - 3];
}

console.log(highestProduct([1,2,3,4]));

module.exports = highestProduct;
