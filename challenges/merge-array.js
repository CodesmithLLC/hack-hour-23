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
  let curr = 0;
  let ret = [];
  let len = arr1.length;
  let i = 0;

  if (arr2.length > len) {len = arr2.length}
  while (i < len) {
    if (arr1[0]) {
      curr = arr1[0];
      if (arr2[0] && arr2[0] < curr) {
        curr = arr2[0];
        arr2.shift();
      } else {
        arr1.shift();
      }
    }
    else if (arr2[0]) {
      curr = arr2[0]);
      arr2.shift();
    }
    ret.push(curr);
    i++;
  }
  return ret;
}

module.exports = mergeArrays;
