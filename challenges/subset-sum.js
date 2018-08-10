/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 */ 
console.log(subsetSum([3, 7, 4, 2], 5)) //- > true, 3 + 2 = 5
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32))// -> true, 3 + 12 + 5 + 12 = 32
console.log(subsetSum([8, 2, 4, 12], 13)) //-> false
console.log(subsetSum([8, -2, 1, -3], 6)) //-> true, 8 + 1 + (-3) = 6

function subsetSum(array, target) {
    console.log('next level of recursion, array is ', array)
    let truth = false; 
    for (let i = 0; i < array.length; i += 1){
        // console.log('this is i ', i)
        // console.log('new target ', target)
        if (array[i] === target) return true;
        if (array[i] < target) {
            const newTar = target - array[i]
            const newArr = array
            newArr.splice(i, 1)
            //try with slice
            truth = subsetSum(newArr, newTar)
            if (truth === true) return true; 
        }
    }
    return truth; 
    // return false; 
}

module.exports = subsetSum;
