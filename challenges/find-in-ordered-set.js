/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target, isMatch = [false]) {
  console.log(`arr is ${arr}`);
  // guard clauses
  if (typeof target !== 'number') return false;
  if (!Array.isArray(arr)) return false;
  // recursion base case
  if (arr.length === 1) {
    if (arr[0] === target) {
      isMatch[0] = true;
      return;
    }
    else return;
  }
  findInOrderedSet(arr.slice(0, Math.ceil(arr.length / 2)), target, isMatch);
  findInOrderedSet(arr.slice(Math.ceil(arr.length / 2), arr.length), target, isMatch);
  return isMatch[0];
}

console.log(findInOrderedSet([1, 4, 6, 7, 9, 17, 45], 4));



module.exports = findInOrderedSet;
