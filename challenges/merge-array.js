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
    let arr1Copy = arr1.slice();
    let arr2Copy = arr2.slice();
    let merged = [];
    for(let i = 0; i < arr1.length + arr2.length; i++){
        if(!!arr1Copy.length && !!arr2Copy.length){
          if(arr1Copy[0] > arr2Copy[0]){
            merged.push(arr2Copy.shift());
          } else {
            merged.push(arr1Copy.shift());
          }
        } else {
          merged = merged.concat(arr1Copy.concat(arr2Copy));
          return merged;
        }
    }
    return merged;
}

module.exports = mergeArrays;
