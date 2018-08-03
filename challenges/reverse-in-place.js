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


// test = [a,b,c,d]
// output = [d,c,b,a]

function reverseInPlace(array, i = 0) {

    if (array.length < 2) return array; // edge case for empty or one element arrays

    if (array.length % 2 === 0) { // even cases 
        if (i === array.length / 2) return array; 

        let length = array.length - 1 // storing in variable length for easier readability when accessing last element
        let firstElement = array[i];
        let lastElement = array[length - i]

        // reassign values at the indexes you're currently on.
        array[i] = lastElement
        array[length - i] = firstElement;

        return reverseInPlace(array, i + 1)
    } else {
        // odd cases 
        if ()
    }

}

module.exports = reverseInPlace;
