/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target, sortedArray = array.sort((a, b) => a - b ), partial = []) {
  //recursively call all possible sums
  //sort the array
  if (partial.reduce((a, b) => a + b) === target) return true;
  if (/*insert end condition*/ && partial.reduce((a, b) => a + b) !== target) return false;
  
  //check each combo 
  for (let i = 0; i < sortedArray.length; i++) {
    if (partial[0] === undefined) {
      partial.push(sortedArray[0]);
      return subsetSum(sortedArray, target, partial);
    } else if (partial[0] === sortedArray[i]) {
        
    }
    for (let j = i + 1; j < sortedArray.length; j++) {
      partial.
    }
  }

}

module.exports = subsetSum;

subsetSum([3, 7, 4, 2], 5);