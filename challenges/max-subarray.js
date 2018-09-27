/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
    let largestNumIndex = 0;
    let largestNum = 0;
    arr.forEach((num, i) => {
        if (num > largestNum) {
            largestNum = num
            largestNumIndex = i
        }
    })

    console.log(largestNumIndex)
    let backIndex = largestNumIndex - 1
    let highestBackTotal = 0;
    let highestIndexPosition = largestNumIndex;
    while (backIndex >= 0) {
        if (arr[backIndex] + highestBackTotal > highestBackTotal) {
            highestBackTotal = arr[backIndex] + highestBackTotal;
            highestIndexPosition = backIndex;
        }
        console.log(highestBackTotal)
        backIndex--
    }

}

maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])
module.exports = maxSubarray;
