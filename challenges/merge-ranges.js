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


function mergeRanges(array) {
  if (!Array.isArray(array)) return undefined;
  const result = [];
  let rangeStart;
  let rangeEnd;
  for (let i = 0; i < array.length - 1; i++) {
    rangeStart = array[i][0];
    rangeEnd = array[i][1];
    for (let j = i + 1; j < array.length; j++) {
      // if the start time of a range is less than the start time of the current range and ends within 
      // the current range, change rangeStart
      if (array[j][0] < rangeStart && array[j][1] >= rangeStart && array[j][1] <= rangeEnd) rangeStart = array[j][0];
      // if the start time of a range is greater than the start time of the current range, less than
      // the end time of the current range, and an end time greater than the current range,
      // change rangeEnd
      if (array[j][0] >= rangeStart && array[j][0] <= rangeEnd && array[j][1] > rangeEnd) rangeEnd = array[j][1];
      console.log(`rangeStart is ${rangeStart}, rangeEnd is ${rangeEnd}`);
    }
    result.push([rangeStart, rangeEnd]);
  }
  return result;
}
console.log(mergeRanges([[3, 5], [10, 12], [0, 1], [4, 8], [9, 10]]));
/* var times = [[3, 5], [10, 12], [0, 1], [4, 8], [9, 10]]
      result --> [[0, 1], [3, 8], [9, 12]]
*/

/* 

*/

module.exports = mergeRanges;
