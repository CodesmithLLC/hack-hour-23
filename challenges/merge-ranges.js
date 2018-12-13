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
        //console.log(rangesSorted[i][1])
        for(let k = rangesSorted[i][0]; k <= rangesSorted[i][1]; k++) {
            myArray.push(k)
        }
    } 
    let unique = [...new Set(myArray)]; 
    //it seems hard to solve this way cuz need to find overlapping number to range try to use hayden solution//
}
mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]])
module.exports = mergeRanges;

// function mergeRanges(array) {
//   let rangeTable = {};
//   let output = [];
//   let currentStart;
//   let startCount = 0;
//   array.forEach(elm => {
//   if(rangeTable[elm[0]][0] === '}') {
//           rangeTable[elm[0]] = rangeTable[elm[0]].slice(1, rangeTable[elm[0]].length);
//       } else if(rangeTable[elm[0]]) {
//           rangeTable[elm[0]] += '{';
//       } else {
//           rangeTable[elm[0]] = '{';
//       }
  
//   if(rangeTable[elm[1]][0] === '{') {
//           rangeTable[elm[1]] = rangeTable[elm[1]].slice(1, rangeTable[elm[1]].length);
//       }else if(rangeTable[elm[1]]) {
//           rangeTable[elm[1]] += '}';
//       } else {
//           rangeTable[elm[1]] = '}';
//       }
//   });
//   for(let i = 0; i <= 12; i++) {
//       if(currentStart === undefined) {
//           if(rangeTable[i][0] === '{') {
//               currentStart = i;
//           }
//       }
      
//       if (rangeTable[i][0] === '{') {
//           startCount += rangeTable[i].length;
//       } else if(rangeTable[i][0] === '}') {
//           startCount -= rangeTable[i].length;
//       }

//       if(startCount === 0 && currentStart !== undefined) {
//           output.push([currentStart, i]);
//           currentStart = undefined;
//       }
//   }
// }

// function mergeRanges(array) {
//   // sort the array by start time within range
//   array.sort((a, b) => a[0] - b[0]);
//   // initialize results
//   const results = [array[0]];
//   // loop through main array, starting at 1
//   for (let i = 1; i < array.length; i++) {
//     // examine latest range in results
//     const lastResult = results[results.length - 1];
//     // does the current range overlap with the last result range?
//     if (array[i][0] <= lastResult[1])
//       // if so, modify latest range
//       lastResult[1] = Math.max(lastResult[1], array[i][1]);
//     // otherwise, create a new range
//     else
//       results.push(array[i]);
//   }
  
//   return results;
// }