/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time
*/

var nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, 4));  //-> true
console.log(findInOrderedSet(nums, 2));  //-> false




// function findInOrderedSet(arr, target) {
//   const set = new Set(arr)
//   return this.state.has(target)
// }

function findInOrderedSet(arr, target) {
  function search(left, right) {
    const center = Math.floor((left + right) / 2);
    if (arr[center] === target) return true;
    if (left === right) return false;

    return arr[center] < target
      ? search(center + 1, right)
      : search(left, center - 1);
  }

  return search(0, arr.length - 1);
}


module.exports = findInOrderedSet;
