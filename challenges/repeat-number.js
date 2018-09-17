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
  //find that number that occurs 2x
  for (let i = 0, obj = {} ; i < array.length; i += 1) {
    obj[array[i]] = (obj[array[i]] || 0) + 1;
    if (obj[array[i]] === 2) {
      return array[i];
    }
  }
}


console.log(repeatNumbers([1, 5, 4, 7, 3, 8, 23, 9, 6, 2, 4]));
module.exports = repeatNumbers;
