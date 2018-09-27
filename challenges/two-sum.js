/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    let ob = {};
    for(let i in arr){
        ob[arr[i]] = i;
        if(!!ob[n - arr[i]]){
            return [ob[n - arr[i]], i];
        }
    }
}

module.exports = twoSum;
