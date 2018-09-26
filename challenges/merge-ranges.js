/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an 
 * array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  //brute force for the win yayyyyy
  if (!array) return;
  if (array.length === 1) return array;

  const otherArray = [array[0]];
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i][0] )
    }
  }
}

module.exports = mergeRanges;
