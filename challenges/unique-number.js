/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
//use bitwise
function uniqueNumber(array) {
  for (let i = 0, obj = {}; i < array.length; i += 1) {
    obj[array[i]] ? obj[array[i]] += 1 : obj[array[i]] = 1
    if (i === array.length - 1) {
      for (let key in obj) {

      }
    }
  }

}

module.exports = uniqueNumber;
