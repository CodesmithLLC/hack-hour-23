'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

// input: array of characters.
// output: reversed array of characters w/o creating a object/array.
// need to swap/re-assign values at first and last index positions, increment first and decrement last.
// create local variables for the start and end points. Use a while loop to iterate through the array.
// for example ['t','u','b'] -> ['b','u','t'].

function reverseInPlace(array) {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    const temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
  return array;
}

// created array like object in initial solution here.
// create a local empty array to store the new reversed characters.
// use length property to get last char in array and then increment the position back one. 
// output: reverse array of characters.

// function reverseInPlace(array) {
//   const reverse = [];
//   let n = 1;
//   for (let i = 0; i < array.length; i++) {
//     let char = array.length - n;
//     reverse.push(array[char]);
//     n++;  
//   } 
//   return reverse;     
// }


console.log(reverseInPlace(['b','u', 't'])) // ['t','u','b']
console.log(reverseInPlace(['b', 'o', 'a', 't'])); // should be ['t','a','o','b']

module.exports = reverseInPlace;
