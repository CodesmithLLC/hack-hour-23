/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
    let centerIndex = Math.floor(arr.length/2)
    let center = arr[centerIndex];
    //console.log('center is ', center, ' at ', centerIndex, ' in ', arr);
    if(center === target){return true}
    if(arr.length <= 1){return false}
    else {
        if(center > target){
            return findInOrderedSet(arr.slice(0, centerIndex), target)
        } else {
            return findInOrderedSet(arr.slice(centerIndex, arr.length), target)
        }
    }
}


module.exports = findInOrderedSet;
