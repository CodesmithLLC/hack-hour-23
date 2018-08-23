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

 // input: two arrays of numbers and sort them from lowest to greatest.
 // push all elements into one array and then sort method.

 function mergeArrays(arr1, arr2) {
    const sorted = arr2;
    for (let i = 0; i < arr1.length; i++) {
      sorted.push(arr1[i]);
    }
     return sorted.sort(function(a, b) {
      return a - b;
   });
  };

module.exports = mergeArrays;
