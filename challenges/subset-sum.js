/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

    // input: array & a target
        // array can be any size, elements do not have to appear in order. 
    // output: boolean. 

function subsetSum(array, target, el = 0, index = 1, output = 0) {
    // edge case: check for valid arguments  
    if ((!Array.isArray(array)) || typeof target !== 'number') return 'invalid arguments passed in';
    // base cases
    if (output === target) return true; 
    if (el === array.length) return false // made it to the end of the array 

    let currElement = array[el];
    let i = 0;
    while (i < array.length) {
        output = currElement + array[index];
        if (output > target) {
            currElement = array[el];
        }
    }

    // ideas: 
        // 1. use recursion
            // stay on the ith element, declare a new parameter to help assist with this.  
            // add the other array elements to that ith element
                // to prevent computationally taxing work, move on to next ith element if total value is > than target 
            // use recursion to move on to the next ith element and keep checking 
            // if at the end of the array, return false
            // use the length of the array to help with traversing 

        // 2. subtract the array elements from the target and capture in an object - look for patterns, move from there 
            // { true,  5  3 + 2 = 5
                // 3: 2, 
                // 7: -2, 
                // 4: 1, 
                // 2: 3
            // }

            // { false, 13
                // 8: 5,
                // 2: 11, 
                // 4: 9,
                // 12: 1,
            // }

            // { true, 6  8 + 1 + (-3) = 6
                // 8: -2,
                // -2: 8,
                // 1: 5,
                // -3: 9,
            // }
        // 

module.exports = subsetSum;
