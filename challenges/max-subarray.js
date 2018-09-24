/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {

    // 1st Attempt ===> 
    // // instantiate an empty array
    // let myArr = [];
    // // instantiate an empty object
    // let myObj = {};
    // // set addition window to a single digit

    // for (let i = 0; i < arr.length; i += 1) {
    //     myArr.push(arr[i])
    //     let tempArr = []
    //     tempArr = myArr.reduce((a,b) => {return a+b})
    //     myObj[myArr] = tempArr
    //     myArr = []
    // }

    // slide window over the array to determine sum of contents

    // each time the sum reachest its highest point, save it to a variable

    // save each array and corresponding total sum to the object

    // loop over the object and return the array with the highest key.



    // // start with the whole array and grab it's sum
    // let total = arr.reduce((a,b)=> {
    //     return a+b;
    // })
    // console.log(total)
    

    // 2nd Attempt ===> 
    // set accumulated sum and maximum sum to negative infinity to start
    let accumulated = -Infinity, max = -infinity;

    // run through array
    for (const num of arr) {
        //accumulated sum will either be higher than num or it wont
        accumulated = Math.max(accumulated + num, num)
        //
        max = Math.max(max, accumulated)
    }

    return max;
};

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));

module.exports = maxSubarray;
