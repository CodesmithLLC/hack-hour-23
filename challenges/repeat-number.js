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
    array = array.sort((a, b) => a - b);
    while (array[0] !== array[1]) {
        array.shift()
    };
    return array[0] || 'No Duplicates';
}

module.exports = repeatNumbers;
