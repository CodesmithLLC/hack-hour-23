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
    let retArr = array.sort();
    for (let i = 0; i < retArr.length; i++) {
        if (retArr[i] === retArr[i + 1]) {
            return retArr[i];
        }
    }
}

module.exports = repeatNumbers;
