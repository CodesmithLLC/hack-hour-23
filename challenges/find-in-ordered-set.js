/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
    if(arr[Math.floor(arr.length / 2)] === target) {
        return true;
    }
    if(arr.length === 0) {
        return false;
    }

    if(target < arr[Math.floor(arr.length / 2)]){
        return findInOrderedSet(arr.slice(0, Math.floor(arr.length / 2)), target);
    } else {
        return findInOrderedSet(arr.slice(Math.floor(arr.length / 2) + 1), target);
    }
}


module.exports = findInOrderedSet;
