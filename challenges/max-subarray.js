/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */
//find max sum
function maxSubarray(arr) {
  let accSum = -Infinity;
  let max = -Infinity;
  //run through the array
  for (const num of arr) {
    //acc sum will either add to the prev sum or it wont
    accSum = Math.max(accSum + num, num)
    //acc sum will either be better than the max, or it wont
    max = Math.max(max, accSum)
  }
  return max
}
// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));//40
module.exports = maxSubarray;
