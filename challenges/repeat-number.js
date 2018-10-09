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
  for (let i = 0, j = 1; i < array.length; i++, j++) {
    if(array[i] === array[j]) return array[i];
  }
  array = array.sort((a,b) => a - b); //to sort in ascending order
  for (let i = 0, j = 1; i < array.length; i++, j++) {
    if(array[i] === array[j]) return array[i];
  }
}
 //.sort()>> 
  // if it returns a negative value, the value in a will be ordered before b.
  // if it returns 0, a and b ordering will stay the same.
  // if it returns +ve value, the value in b will be ordered before a.

module.exports = repeatNumbers;
