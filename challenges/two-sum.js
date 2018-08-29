/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

// function twoSum(arr, n) {
//     let hashTable = {};

//     for(let i = 0; i < arr.length; i++) {
//         if(!!hashTable[n-arr[i]]) {
//             return true;
//         } else {
//             hashTable[arr[i]] = 1;
//         }
//     }

//     return false;
//}

function twoSum(arr, n) {
    let hashTable = {};

    return arr.reduce((acc, curr) =>{
        if(!acc) {
            if(!!hashTable[n-curr]) {
                return true;
            } else {
                hashTable[curr] = 1;
            }
        }
        return acc;
    }, false);
}

module.exports = twoSum;
