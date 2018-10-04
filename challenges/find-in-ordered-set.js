/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  return binarySearch(arr, target, 0, arr.length - 1);
}

function binarySearch(arr, target, start, end) {
  if(end <= start) return false;

  let middle = (start + end) / 2;

  if(arr[middle] === target) 
    return true;
  else if(arr[middle] > target)
    return binarySearch(arr, target, start, middle - 1);
  else if(arr[middle] < target)
    return binarySearch(arr, target, middle + 1, arr.length - 1);
}

let arr = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(arr, 4));


module.exports = findInOrderedSet;
