/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    const newArray = [];
    if (array.length < 3 || !Array.isArray(array)) return 0;
    array.sort((a, b) => b - a);
    const negative = array.filter(e => e < 0);
    if (negative.length) {
      negative.sort((a, b) => a - b);
      while (newArray.length < 3) {
        if (array[0] > Math.abs(negative[0])) {
          newArray.push(array.splice(0, 1));
        } else if (array[0] < Math.abs(negative[0])) {
          newArray.push(negative.splice(0, 1));
        } else (
          newArray.push(array.slice(0, 1), negative.slice(0, 1))
        )
      }
      return newArray.reduce((acc, curr) => acc *= curr);
    }
    return array.slice(0,3).reduce((acc, curr) => acc *= curr);
}

module.exports = highestProduct;
