/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return 'invalid input';

    if (!arr1.length) return arr2;

    if (!arr2.length) return arr1;

    const sortedArr = [];

    arr1.forEach(function(current, index) {
        if (current < arr2[index]) {
            sortedArr.push(current);
            sortedArr.push(arr2[index]);
        } else if (current >= arr2[index]) {
            sortedArr.push(arr2[index]);
            sortedArr.push(current);        
        }
    })
    return sortedArr;
}


var my_array = [3,4,6,10,11,15,21];
var another_array = [1,5,8,12,14,19];

console.log(mergeArrays(my_array, another_array))

module.exports = mergeArrays;
