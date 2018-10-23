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
function uniqueNumber(array) {
   //BitWise Operation using XOR 
   //take a look at how underthe bitwise working when you have a time 
   // and also hackour solution
        var result = 0;
        for (var i = 0; i < array.length; i++) {
          
          result ^= array[i]
          
        }
      
      return result;
      
      
}

uniqueNumber([1,2,1,3,3,2,4])
module.exports = uniqueNumber;


//  Sort
function uniqueNumber1(array) {
  // sort array
  array = array.sort((a, b) => a - b);
  // loop through pairs of numbers
  for (let i = 0; i < array.length - 1; i += 2) {
    // if pair of numbers are not equal to each other
    if (array[i] !== array[i + 1]) {
      // return the first non-matching number
      return array[i];
    }
  }
  // otherwise return the last number in the array
  return array[array.length - 1];
}

// Add and Remove Duplicates
// function uniqueNumber2(array) {
//   // store each element in an object
//   var store = {};
//   // loop through array
//   for (let i = 0; i < array.length; i++) {
//     // if element already exists in store, delete it
//     if (array[i] in store) {
//       delete store[array[i]];
//     // add element to store
//     } else {
//       store[array[i]] = true;
//     }
//   }
//   // return the remaining value in store
//   return Object.keys(store)[0];
// }

// // Bitwise XOR ^
// // Important properties of XOR:
//   // a ^ b === b ^ a
//   // a ^ 0 = a
//   // a ^ a = 0
  
// function uniqueNumber(array) {
//   let result = 0;
//   for (let i = 0; i < array.length; i++) {
//     result ^= array[i];
//   }
//   return result;
// }