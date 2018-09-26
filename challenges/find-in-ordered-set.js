/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  if (!Array.isArray(arr) || arr.length === 0 || isNaN(target)) return false;

  let middle = Math.floor(arr.length / 2);
  while (true) {
    if (target === arr[middle]) return true;
    else if (middle === 0 || middle === arr.length - 1) break;
    else if (target < arr[middle]) middle = Math.floor(middle / 2);
    else if (target > arr[middle]) middle = middle + Math.floor((arr.length - middle) / 2);
  }
  return false;
}

var nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, 4)); 
console.log(findInOrderedSet(nums, 17));  


module.exports = findInOrderedSet;
