/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {

    let isTrue = false;

    for ( let i = 0; i < arr.length; i++) {
        for ( let j = 0; j < arr.length; j++ ) {

            if (arr[i] + arr[j] === n) {
                isTrue = true;
                break;
            }
        }
    }
    return isTrue
}


module.exports = twoSum;
