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
  for (let i = 0, j = 0; i < array.length; i++) {
    if (i !== array[i] - 1) { // already in correct spot otherwise
      j = array[array[i] - 1];
      if (array[array[i] - 1] === array[i]) return array[i]; // duplicate number found
      array[array[i] - 1] = array[i];
      array[i] = j;
    }
  }
  return array[array.length - 1]; // duplicate number is at end of array
}

console.log(repeatNumbers([3,2,2,1]));
console.log(repeatNumbers([2,3,2,1]));
console.log(repeatNumbers([2,3,1,2]));
console.log(repeatNumbers([1,2,2,3]));


module.exports = repeatNumbers;
