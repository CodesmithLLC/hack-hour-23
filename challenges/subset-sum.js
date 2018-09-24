/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {

}


console.log(subsetSum([1,2,3,4,5], 5))


// does any combination of these numbers, when summed, result in the target number
//for each number...
// check every combination
    // stop if any two numbers add up to target
    // stop if any three numbers add up to target
    // stop if any x amount of numbers add up to the target

    // for each number in the array...
    // for each length up to the length of the given array...
    // [1,2,3] 5
        // 1? no 1+2?,1+3? no 1+2+3? no
        // 2? no 2+1?,2+3? yes. Stop. 2+1+3? no
        // 3? no 3+1? no 3+1+2? no
        //

        let isSubset = true
        for (let i = 0; i < array.length; i++) {
            
            if (target - array[i] !== 0) { //checks all single number cases
                let testArr = [];
                testArr.push(...array) 

                testArr.reduce(function(acc,curr) {
                    return acc + curr;
                })
            }
            
        }



module.exports = subsetSum;
