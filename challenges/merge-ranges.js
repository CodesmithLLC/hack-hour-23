/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

 // input array of arrays with rangees that need to be condensed.
 // sub-arrays are not in order, but need to check each array for index[0] value, on with lowest start value as the first subarray.
 // check each other subarray for the next value that is greater than index[1] of initial sub-array. 
 // slice method and push method to replace numbers within the index[1] if needed.


function mergeRanges(array) {

}

module.exports = mergeRanges;
