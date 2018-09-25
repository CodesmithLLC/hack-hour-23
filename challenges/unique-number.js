/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 */
 /*
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */

// my solution for 0(n) time
// function uniqueNumber(array) {
//   const answer = new Set()
//   array.forEach(ele => {
//     if (answer.has(ele)) {
//       answer.delete(ele)
//     } else {
//       answer.add(ele)
//     }
//   })
//   const iterator = answer.values(); 
//   return iterator.next().value;
// }

// 0(1) space
function uniqueNumber(array) {
    let pointer = 1;
    while (pointer < array.length) {
      if (array[0] === array[pointer]) {
        array.splice(pointer,1)
        array.shift()
        pointer = 1
      } 
      else if (pointer === array.length - 1) {
        return array[0]
      }
      else pointer++
    }
    return array[0]
}


console.log(uniqueNumber([1,2,1,3,3,2,4])); //-> 2


module.exports = uniqueNumber;
