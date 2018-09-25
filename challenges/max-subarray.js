/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  const array = JSON.parse(JSON.stringify(arr));
  let max = -Infinity;
  let sum = 0;
  while (array.length > 0) {
    if (array.length === 1 && array[0] > max) {
      max = array[0];
      array.pop();
    } else {
      sum = array.reduce((acc, cur) => acc + cur);
      if (sum > max) max = sum;
      if (array[0] > array[array.length - 1]) {
        array.pop();
      } else {
        array.shift();
      } 
    } 
  }
  return max;
}

module.exports = maxSubarray;
