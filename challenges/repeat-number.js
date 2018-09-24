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
  // guard cases
  if (!array) return [];
  if (array.length === 1) return array[0];
  
  // do in O(n) time
  // do in O(1) space

  // iterate through the array
  for (let i = 0; i < array.length; i += 1) {
    // reassign the vals in the array
    // make it into a negative?
    // use Math.abs to check 
  }
  // output: find the number that appears twice. 
}
// repeatNumbers([1,2,3,4,1])

module.exports = repeatNumbers;
