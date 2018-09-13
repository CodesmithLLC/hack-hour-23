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
  for(let i = 0, holder = {}; i < array.length; i++) {
    if(holder.hasOwnProperty(array[i])) return array[i]
    else holder[array[i]] = 0;
  }
}

// const arr = new Array(1, 10, 5, 4, 7, 5, 2, 9, 11);
// console.log(arr);
// console.log(repeatNumbers(arr));


module.exports = repeatNumbers;
