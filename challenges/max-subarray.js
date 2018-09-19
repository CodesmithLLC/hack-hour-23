/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {

    // instantiate an empty array
    let myArr = [];
    // instantiate an empty object
    let myObj = {};
    // set addition window to a single digit

    for (let i = 0; i < arr.length; i += 1) {
        myArr.push(arr[i])
        let tempArr = []
        tempArr = myArr.reduce((a,b) => {return a+b})
        myObj[myArr] = tempArr
        myArr = []
    }

    console.log(myObj)

    // slide window over the array to determine sum of contents

    // each time the sum reachest its highest point, save it to a variable

    // save each array and corresponding total sum to the object

    // loop over the object and return the array with the highest key.



    // start with the whole array and grab it's sum
    let total = arr.reduce((a,b)=> {
        return a+b;
    })
    console.log(total)
    
    // shrink the 

};

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));

module.exports = maxSubarray;
