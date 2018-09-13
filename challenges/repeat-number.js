/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  if (!Array.isArray(array)) return undefined;
  let sum = 0;
  let arraySum = array.reduce((acc, cur, index) => {
    sum += index;
    return acc + cur;
  });
  return arraySum - sum;
}

module.exports = repeatNumbers;
