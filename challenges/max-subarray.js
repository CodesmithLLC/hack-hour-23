/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
    let newArr = arr;
    let currentSum;
    let maxSum = 0;
    let retArr;

    while (newArr.length !== 0){
        for (let i = 0; i++; i < newArr.length) {
            currentSum = 0;
            for (let j = 0; j++; j <= i) {
                currentSum = currentSum + newArr[j];
            }
            if (currentSum > maxSum) {
              maxSum = currentSum;
              retArr = [];
              for(let x = 0; x++; x <= i) {
                retArr.push(newArr[x]);
              }
            }
        }
        //something
        newArr.shift();
    }
    return retArr;
}









//     let retArr;
//     let newArr = arr;
//     let maxSum = 0;
    
//     while (newArr.length !== 0) {
//         let currentSum = 0;
//         for (let i = 0; i++; i < newArr.length) {
//             for (let j = 0; j++; j < )
//             currentSum = currentSum + newArr[i]
//             if (currentSum > maxSum) {
//                 maxSum = currentSum;
//                 retArr = [];
//                 for(let x = 0; x++; x <= i) {
//                     retArr.push(newArr[x]);
//                 }
//             }
//         }
//     }




//     for (let i = 0; i++; i < arr.length){
//         for (let j = 0; j++; j < i){
//             if ()
//         }
//     }
// }

module.exports = maxSubarray;
