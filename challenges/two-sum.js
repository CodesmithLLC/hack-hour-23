/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  // Guard Clauses
  if (!arr || !n) {
    return 0;
  }

  if (!Array.isArray(arr)) {
    return 0;
  }

  if (typeof(n) !== "number") {
    return 0;
  }

  if (arr.length === 1) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === n) {
        return true;
      }
    }
  }
  return false;

}

module.exports = twoSum;
