/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  // iterate through array
  // walk 
  while(arr.length){
    let poppedNum = arr.pop();
    
    console.log(arr);
    
    for(let x = 0; x < arr.length; x += 1) {
      if((poppedNum + arr[x]) === n){
        return true;
      }
    }
  }
  return false;
}

// console.log(twoSum([1,2,3,4],))
module.exports = twoSum;
