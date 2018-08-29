/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let arrCopy = arr.slice();

  while (arrCopy.length) {
    let tail = arrCopy.pop();
    let difference = n - tail;
    if (arrCopy.indexOf(difference) >= 0) {
      return true;
    }
  }
  return false;
}

module.exports = twoSum;
