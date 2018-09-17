/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * // Imagine these 
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
    //sort the array by start time
    array.sort((a,b) => a[0] - b[0])
    // initialize results
    const results = [array[0]];
    // loop through main array
    for (let i = 1; i < array.length; i++) {
        //examine the latest range in results
        const lastResult = result[results.length-1];
        //does the current range overlap with the last result range?
        if (array[i][0] <= lastResult[1]) 
            //if so, modify the latest results
            lastResult[1] = Math.max(lastResult[1], array[i][1]);
            //otherwise create a new range
        else results.push(array[i])
    }
    return results;
}

module.exports = mergeRanges;
