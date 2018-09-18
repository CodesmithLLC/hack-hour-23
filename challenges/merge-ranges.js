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
    let start = [];
    array.forEach(arr => {
        start.push(arr[0])
    })

    let end = [];
    array.forEach(arr => {
        end.push(arr[1])
    })

    start = start.sort((a, b) => a - b);
    end = end.sort((a, b) => a - b);
    console.log(start)
    console.log(end)

    const combined = [start[0]];
    let index = 1;
    while (start.length >= index) {
        if (start[index] > end[index - 1]) {
            combined.push(end[index - 1])
        }
        console.log(combined)
        index++
    }
}

 var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];

 mergeRanges(times);
 

module.exports = mergeRanges;
