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
    //looping thr all number and incremnt and put into new
    //sort based on the first number in the array.
    const rangesSorted = array.sort(function(a, b) { 
        return a[0] > b[0] ? 1 : -1;
    });
    //sort thr all range than find
    //create a new array to store new all value
    const myArray = [];
    for(let i = 0; i < rangesSorted.length; i++) {
        console.log(rangesSorted[i][0])
        console.log(rangesSorted[i][1])
        
       
    }       
}
mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]])
module.exports = mergeRanges;
