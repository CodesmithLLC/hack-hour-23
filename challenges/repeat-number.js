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
  if (array.length === 1) {
    return [];
  }
  return array.reduce((initial, next) => {
    if (initial.length > 0) {
      return initial;
    }
    if (array[array.length - 1] === next) {
      initial.push(next);
      return initial
    } else if (array.indexOf(next) === array.length - 2) {
    array.pop()
     return repeatNumbers(array)
    } else {
      return initial
    }
  }, [])[0]
}


module.exports = repeatNumbers;
