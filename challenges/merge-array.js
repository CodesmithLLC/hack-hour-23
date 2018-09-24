/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a function to merge our arrays of orders into one sorted array.
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

    // O(n log n)
    // let myArr = arr1.concat(arr2);
    // return myArr.sort((a, b) => {return a - b});

    // 0(n)
    let merged = [];
    let current = 0;
    let index1 = 0;
    let index2 = 0;

    while ( current < (arr1.length + arr2.length) ) {
        let unmerged1 = arr1[index1];
        let unmerged2 = arr2[index2];

        if (unmerged1 < unmerged2 || unmerged2 === undefined) {
            merged[current] = unmerged1;
            index1++
        } else {
            merged[current] = unmerged2;
            index2++
        }
        current++
    }
    return merged;
}

module.exports = mergeArrays;
