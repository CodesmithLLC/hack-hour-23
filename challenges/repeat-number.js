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

    let store = {};
    for (let i = 0; i < array.length; i++){
        if (store.hasOwnProperty(array[i])) {
            return array[i];
        }
        store[array[i]] = true;
        }
    
    // Summation Formula - Needs to be in order to work
        // array.sort()...
        const n = array.length - 1;
        let expectedSum = (n * (n - 1)) / 2;
        let actualSum = array.reduce((a,b)=>{a+b});
        return actualSum- expectedSum;


};

console.log(repeatNumbers([5,2,6,3,5,7]));

module.exports = repeatNumbers;
