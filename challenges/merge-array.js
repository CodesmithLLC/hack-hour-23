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
    let sortedArray = [];
    let pointer1 = 0;
    let pointer2 = 0;


    while(pointer1 < arr1.length && pointer2 < arr2.length) {
        if(arr1[pointer1] < arr2[pointer2]) {
            sortedArray.push(arr1[pointer1]);
            pointer1 ++;
        } else {
            sortedArray.push(arr2[pointer2]);
            pointer2 ++;
        }
    }

    return sortedArray.concat(arr1.slice(pointer1)).concat(arr2.slice(pointer2));
}

module.exports = mergeArrays;
