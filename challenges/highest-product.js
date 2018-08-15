/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */


function highestProduct(array) {
  // edge cases: input must be array or at least 3 integers
  if (!Array.isArray(array) || array.length < 3) return 0;

  const copyOfArr = array.slice(); // do not mutate input array
  const maxNumberHolder = [];
  let maxNum;

  while (maxNumberHolder.length < 3) {
    maxNum = Math.max(...copyOfArr);
    copyOfArr.splice(maxNumberHolder.indexOf(maxNum), 1);
    maxNumberHolder.push(maxNum);
  }
  return maxNumberHolder.reduce((a, b) => a * b);
}

module.exports = highestProduct;
