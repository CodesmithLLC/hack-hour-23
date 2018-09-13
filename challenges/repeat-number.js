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
  let index = 0; 
  for (let i = {}; index < array.length; index += 1) {
    const nextNum = array[index]
    if (i[nextNum]) return nextNum
    i[nextNum] = nextNum; 
  }
  return 'an array with no repeative number was not given'
}

const array = [1,2,3,5,5,6]

console.log(repeatNumbers(array))


module.exports = repeatNumbers;
