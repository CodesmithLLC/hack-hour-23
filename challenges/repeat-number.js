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
    function repeatNumbers(array) {
        for(let i = 0; i < array.length; i++) {
          if(typeof array[Number(array[i]) - 1] === 'string') {
            return Number(array[i] - 1) + 1;
          } else {
            array[Number(array[i] - 1)] = String(array[Number(array[i] - 1)])
          }
        }
      }
}

module.exports = repeatNumbers;
