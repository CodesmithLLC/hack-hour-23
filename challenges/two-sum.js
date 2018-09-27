/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    const num = arr.shift();
    let found = arr.reduce((acc, cur) => {
        if (cur + num === n) {
            return acc = true
        }
        return acc
    }, false)
    if (found) return found
    if (arr.length > 0) {
        return twoSum(arr, n)
    }
    return false
}

module.exports = twoSum;
