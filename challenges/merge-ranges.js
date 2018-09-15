/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
    let subArr = [];
    const finalArr = [];
    
    array.sort(function(a, b) {
        return a - b;
    });
    
    for (let i = 0; i < array.length; i += 1) {
        if (i = 0) subArr.push(i)
        if (subArr.length > 2) {
            finalArr.push(subArr);
            subArr = [];
        }
    }

        //sort array
        //grab the smallest number and put in subarray
        //iterate through the array and check if there is a gap larger than 2 from the smaller number once there is put the the previous number as the second parameter in the sub array
        //put the number that wqsa two more into next sub array

    

}

module.exports = mergeRanges;
