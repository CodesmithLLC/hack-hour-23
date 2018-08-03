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
    let length = array.length;
    console.log(length);
    const newArr = [];
    for(let x= length-1; x >=0; x--){
        newArr.push(array[x]);
    }
    return newArr.join('');
}
console.log(reverseInPlace('hellos'));
module.exports = reverseInPlace;
