/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

const findInOrderedSet = (arr, target) => {
  // guard cases
  if (!target || !arr) return false;
  if (!target && !arr) return false;

  // get the index & value of the middle element in the array
  const middleIndex = Math.floor((arr.length - 1) / 2);
  const middleValue = arr[middleIndex];

  // check to see if middle value is equal to target
  if (target === middleValue) return true;

  // if target is less than middle value, iterate through first half
  if (target < middleValue) {
    for (let i = 0; i < middleIndex; i += 1) {
      if (arr[i] === target) return true;
    }
    return false;
  }
  // if target is greater than middle value, iterate through first half
  if (target > middleValue) {
    for (let i = middleIndex; i < arr.length - 1; i += 1) {
      if (arr[i] === target) return true;
    }
    return false;
  }
};

module.exports = findInOrderedSet;
