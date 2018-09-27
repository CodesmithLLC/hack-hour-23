/* You are given an array of integers with both positive and negative numbers. 
 * Write a function to find the maximum finalSum of all subarrays. A subarray is a 
 * section of consecutive elements from the original array. The whole array can be 
 * considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  if (!arr || arr.length === 0) return;

  let tempfinalSum = 0;
  let finalSum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    tempfinalSum = Math.max(0, tempfinalSum + arr[i]);
    finalSum = Math.max(finalSum, tempfinalSum)
  }

  return finalSum;
}

console.log(maxSubarray([3,-2,-2,1,1,5]));

module.exports = maxSubarray;
