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

  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return 0;
  }

  if (arr1.length === 0 || arr2.length === 0) {
    return 0;
  }

  let mergedArr = [];

  while (arr1.length > 0) {
    mergedArr.push(arr1.pop());
  }

  while (arr2.length > 0) {
    mergedArr.push(arr2.pop());
  }

  mergedArr = mergedArr.sort((a, b) => a - b);
  return mergedArr;
}

module.exports = mergeArrays;
