/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time
 *
 */

function mergeArrays(arr1, arr2) {
  // iterate until array.length is 0
  // compare smaller first element
  // shift smaller and push into empt array
  // if array.length is 0, push rest of other array into empt array
  
  const output = [];
  while (arr1.length || arr2.length > 0){
    if(arr1[0] < arr2[0]){
      output.push(arr1.shift())
      console.log(output)
    } else {
      output.push(arr2.shift())
      console.log(output)
    }
  }

  return output;
}

var my_array = [3,4,6,10,11,15,21];
var another_array = [1,5,8,12,14,19];


console.log(mergeArrays(my_array, another_array))

module.exports = mergeArrays;
