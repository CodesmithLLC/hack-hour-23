/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

// input: two parameters ===> nums is a sorted array of integers. Second parameter 'target' is a integer.
// output: check if target is present in the current nums array.
// use for loop to iterate throught the array with conditional logic.

function findInOrderedSet(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

const nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 6));//  -> true
console.log(findInOrderedSet(nums, 2));//  -> false

module.exports = findInOrderedSet;
