/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false
[1, 2, 3, 4, 5, 6, 7, 8]
 */


function findInOrderedSet(arr, target) {
  if (arr[0] === target) return true;
  if (arr[0] !== target && arr.length === 1) return false;
  if (arr[Math.floor(arr.length / 2)] > target) {
    arr = arr.splice(0, Math.floor(arr.length/2));
    return findInOrderedSet(arr, target);
  } else if (arr[Math.floor(arr.length / 2)] < target) {
    arr = arr.splice(Math.floor(arr.length / 2));
    return findInOrderedSet(arr, target);
  } else if (arr[Math.floor(arr.length/2)] === target) {
    return true;
  }
}
var nums = [1, 4, 6, 7, 9, 17, 45]
//console.log(findInOrderedSet(nums, 4));  //-> true
console.log(findInOrderedSet(nums, 9));

module.exports = findInOrderedSet;
