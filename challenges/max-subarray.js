/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

// function maxSubarray(arr) {
//   // guard cases
//   if (!arr || arr.length <= 1) return [];
//   if (arr.length === 2) return arr[0] + arr[1];
  
//   // iterate through the input array
//   const values = arr.reduce((obj, curr, i, array) => {

//     // create a copy until the end and store as a value on an object
//     const arrayAsString = JSON.stringify(array.slice(i));
//     // the value will be the adding of all numbers together
//     const sum = array.slice(i).reduce((a, b) => a + b);

//     // store as key/val
//     obj[sum] = arrayAsString;
    
//     // return accumulator 
//     return obj;
//   }, {});

//   // use object.keys to find the max of the numbers in the object
//   const max = Math.max(...Object.keys(values));
//   // return the array inside of the max num. 
//   return JSON.parse(values[max.toString()]);
// }

const maxSubarray = (arr) => {
  // guard cases
  if (!arr || arr.length <= 1) return [];
  if (arr.length === 2) return arr[0] + arr[1];

  // iterate through the array
  // starting at the current element
    // get the elements of the array from current position to the end
    // then get the rest until you're back to square one. 
    // use a helper function here
    // look into returning an object with the values? 
  // continue to move down the list and store the value in an object
}

const helper = (array) => {
  // receives a copy of the array as input, okay to mutate
  array.reduce((obj, curr, i, arr) => {
    let sum = arr.reduce()
  }, {});
}
// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]))
// console.log(maxSubarray([15,20,-5,10]))

module.exports = maxSubarray;
