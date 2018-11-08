/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

// input: array and number.
// approach: check guard case to ensure that array is an array and the target num is a number.
// loop thru the array and check if the array sum is equal to the target num -> ret true else false.

const twoSum = (arr, n) => {
  if (Array.isArray(arr) === false) { return false; }
  if (typeof n !== 'number') { return false; }
  for (let i = 0; i < arr.length; i++) {
    const sum = arr[0] + arr[1];
    if (sum === n) { return true; }
  }
  return false;
};


console.log(twoSum([1, 2], 3)); // true 
console.log(twoSum([1, 2], 5)); // false

module.exports = twoSum;
