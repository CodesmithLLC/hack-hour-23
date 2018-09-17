/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:

 *
 * Do not assume the ranges are in order
 */


var times = [[0, 1], [3, 5], [4, 8], [9, 13], [10, 12]]

console.log(mergeRanges(times));// -> [[0, 1], [3, 8], [9, 12]]
function mergeRanges(array) {
  // merge together the ranges of time so you have least amount of ranges as possible
  //find a way to deal with the overlap
  //sort the ranges by beginning hour
  let sorted = array.sort((a, b) => a[0] - b[0]);
  // if the end of the last range is >= beginning of the next range
  return sorted.reduce((acc, curr) => {
    console.log(acc);
    console.log('last one', acc[acc.length - 1]);
    if (acc.length > 0 && acc[acc.length - 1][1] >= curr[0]) {
      //replace end of acc's arr with end of curr arr
    
      acc[acc.length - 1].splice(1, 1, curr[1]);
    } else {
      acc.push(curr);
    }
    return acc;
  }, [])
}

// function mergeRanges(array) {
//   const obj = {};
//   const result = [];
//   array.forEach(arr => {
//     obj[arr[0]] = arr[1];
//   })
//   console.log(obj);
//   for (let start in obj) {
//     console.log('result', result);
//     if (result.length > 0 && obj.hasOwnProperty(obj[start])) {
//       result[result.length - 1]
//     } else {
//       result.push([start, obj[start]]);
//     }
//   }
// }
module.exports = mergeRanges;
