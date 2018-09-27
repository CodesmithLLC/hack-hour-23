/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 */

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])) //-> 18 from [3, 10, -4, 7, 2]
console.log(maxSubarray([15,20,-5,10]))  //-> 40

// Codesmith solution
function maxSubarray(arr) {
  // set accumulated sum and maximum sum to negative infinity to start
  let accumulated = -Infinity, max = -Infinity;
  // run through arr
  for (const num of arr) {
    // accumulated sum will either add to the previous accumulation, or it won't
    accumulated = Math.max(accumulated + num, num);
    // accumulated sum will either be better than max sum, or it won't
    max = Math.max(max, accumulated);
  }
  
  // return maximum sum
  return max;
}




module.exports = maxSubarray;
