/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  /***** BASE CASE ******/
  if (!arr.length) return false;
  /***** RECURSIVE CASE ******/
  const temp = arr.shift();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + temp === n) return true;
  }
  return twoSum(arr, n);
}

module.exports = twoSum;
