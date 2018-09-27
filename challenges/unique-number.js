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
// function uniqueNumber(array) {
//   const output = {};
//   for (let i = 0; i < array.length; i++) {
//     if (output[array[i]]) {
//       delete output[array[i]]
//     } else {
//       output[array[i]] = 1;
//     }
//   }

//   return Object.keys(output)[0]
// }

function uniqueNumber(array) {
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) === array.lastIndexOf(array[i])) {
      return array[i]
    }
  }
}

module.exports = uniqueNumber;
