/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 */ 
console.log(subsetSum([3, 7, 4, 2], 5)) //- > true, 3 + 2 = 5
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32))// -> true, 3 + 12 + 5 + 12 = 32
console.log(subsetSum([8, 2, 4, 12], 13)) //-> false
console.log(subsetSum([8, -2, 1, -3], 6)) //-> true, 8 + 1 + (-3) = 6

function subsetSum(array, target) {
    if (array.length === 1) return array[0] === target; 
    for (let i = 0; i < array.length; i += 1){
        const newTar = target - array[i]
        const newArr = [...array.slice(0,i), ...array.slice(i+1)]
        if (array[i] === target || subsetSum(newArr, newTar)) return true; 
    }
    return false; 
}

module.exports = subsetSum;
