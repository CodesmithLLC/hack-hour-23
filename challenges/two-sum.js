/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (!arr) return false;
  let i = 0;
  let j = arr.length - 1;
  let sum;

  while (i < j) {
    sum = arr[i] + arr[j];
    if (sum < n) i += 1;
    if (sum > n) j -= 1;
    if (sum === n) return true;
  }

  return false;
}

console.log(twoSum([1,3,4,6,9], 11));
console.log(twoSum([1,3,4,6,9], 10));
console.log(twoSum([1,3,4,6,9], 15));



module.exports = twoSum;
