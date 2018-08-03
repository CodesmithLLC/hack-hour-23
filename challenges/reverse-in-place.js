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

function reverseInPlace(array) {
  if(array.length > 1){
    let i = 0;
    for(let j = array.length - 1; j >= array.length / 2; j--){
      let temp = array[j];
      array[j] = array[i];
      array[i] = temp;
      ++i;
    }
  }
  
  return array;
}

// const hello = ['h','e','l','l','o'];
// const even = ['e','v','e','n'];

// console.log(reverseInPlace(hello));
// console.log(reverseInPlace(even));

module.exports = reverseInPlace;
