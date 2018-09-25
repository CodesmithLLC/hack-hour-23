/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(arr) {
  // handle edge cases
    if (!Array.isArray(arr) || !arr || arr.length < 3) return 0;
  
  // sort the array
    arr.sort((a, b) => a - b);
  
  // calculate product with mins
    const productWithMins = arr[0] * arr[1] * arr[arr.length - 1];
    
    // calculate product with maxes
    const productWithMaxes = arr[arr.length - 3] * arr[arr.length - 2] * arr[arr.length - 1];
  
  // compare and return the max of those two
    return Math.max(productWithMaxes, productWithMins);
}


module.exports = highestProduct;
