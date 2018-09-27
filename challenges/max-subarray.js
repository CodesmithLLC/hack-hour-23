/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
    //max_so_far = max_ending_here = 0
    let max_so_far = 0;
    let max_ending_here = 0;
    let arrs =[]
    for(let i = 0; i < arr.length; i++) {
        max_so_far += arr[i];
        if(max_ending_here > max_so_far) {
            arrs.push(arr[i])
            max_so_far += max_ending_here
        }
    }
    console.log(arrs)
    console.log(max_so_far)
    
}
maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])
module.exports = maxSubarray;
