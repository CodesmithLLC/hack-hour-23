/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const array = arr.slice();

  while (array.length > 1){
    for (let i=1; i<array.length; i++){
      if(array[0] + array[i] === n) return true;
    }
    array.shift();
  }
  
  return false;
}


module.exports = twoSum;
