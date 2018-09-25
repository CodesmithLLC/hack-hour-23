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
  const obj = {}
  
  let i = 0

  while(i < array.length){
    if(array[i] in obj){
      console.log("exist!!!")
      break;
    }
    obj[array[i]] = i;
    i++
  }
}

module.exports = repeatNumbers;

console.log(repeatNumbers([1, 2, 3, 4, 5, 2]))