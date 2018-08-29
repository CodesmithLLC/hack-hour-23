/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  // base case
  if (!arr.length) return false;
  // recursive case
  const temp = arr.shift();
  arr.forEach(num => {
    if (num + temp === n) return true;
  });
  return twoSum(arr, n);
}

module.exports = twoSum;
