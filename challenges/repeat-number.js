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
  for (let i = 0, sum = 0; i < array.length; i++) {
    sum += array[i]
    if (i === array.length - 1) return sum - (array.length - 1)*array.length/2 
  }
}

module.exports = repeatNumbers;
