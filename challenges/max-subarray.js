/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
    let finResult = 0;

    for(let i = 0; i < arr.length; i++) {
        // if (resultCurr + arr[i] >= result) {
        //     resultCurr += arr[i];
        // } else {
        //     resultCurr = 0;
        //     result = Math.max(result, resultCurr);
        // }
        let result = 0;
        for(let j = i; j < arr.length; j++) {
          result += arr[j];
          if(result > finResult) {
            finResult = result;
          }
        }
    }

    return finResult;
}
module.exports = maxSubarray;
