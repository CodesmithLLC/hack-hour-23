/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  const perms = [arr[0]];

  if (arr.length === 1) {
    return arr[0]
  }

  for (let i = 1; i < arr.length; i++) {
    perms.push(perms[perms.length - 1] + arr[i])
  }

  const child = maxSubarray(arr.slice(1, arr.length))
  const highestPerm = perms.sort((a, b) => a < b)[0];
  
  return highestPerm > child ? highestPerm : child
 
}

module.exports = maxSubarray;
