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
  let merged = [];
  let idx2 = 0;
  let idx1 = 0;

  while (idx1 < arr1.length) {
    let element1 = arr1[idx1];
    let element2 = arr2[idx2];

    if (element2 === undefined) {
      element2 = Infinity;
    }

    if (element1 <= element2) {
      merged.push(element1);
      idx1++;
    } else {
      merged.push(element2);
      idx2++;
    }
  }

  let remaining = arr2.slice(idx2);
  if (remaining) {
    merged.push(...remaining);
  }
  
  return merged;
}



module.exports = mergeArrays;
