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

let arr = [1, 2, 3, 4, 5]  // [5, 4, 3, 2, 1]


function reverseInPlace(array) {
  // set front and back pointers
  let front = 0;
  let back = array.length - 1;

  // iterate and swap, meet in the middle
  while (front < back) {
    // create a temp
    const temp = array[front];

    // assign back to the front
    array[front] = array[back];
    
    // assign temp to the back
    array[back] = temp;

    // increment and decrement
    front++;
    back--;
  }

  // return
  return array;
}

// function reverseInPlace(array) {
//   // set front and back pointers
//   let front = 0;
//   let back = array.length - 1;

//   // iterate and swap, meet in the middle
//   while (front < back) {
// 	// use array destructuring to make the swap
// 	[array[front++], array[back--]] = [array[back], array[front]] 
//   }

//   // return
//   return array;
// }

module.exports = reverseInPlace;
