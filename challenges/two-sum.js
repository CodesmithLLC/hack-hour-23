/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  // slow solution; naive way, o(n^2)
  // if(arr){
  //   for(let i = 0; i < arr.length; i++) {
  //     const neededValue = n - arr[i];
  //     for(let j = 0; j < arr.length; j++ ) {
  //       if(arr[j] === neededValue) return true;
  //     }
  //   }
  // }
  // return false;
  // o(n) solution, there's probably a faster way
  if(arr) {
    const newArr = {};
    for(let i = 0; i < arr.length; i++) {
      newArr[arr[i]] = n - arr[i];
      if(newArr[n - arr[i]]) return true;
    }
  }
  return false;
}

// module.exports = twoSum;

console.log(twoSum([], 6));
