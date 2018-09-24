/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

const addElementsAndCheckArray = (startingArr, elementsArr, target) => {
  const copyOfstartingArr = startingArr.slice();
  const copyOfelementsArr = elementsArr.slice();
  
  let i = 0;
  while (i < elementsArr.length) {
      // the function will add to the first array one element at a time, checking the value against the target number. 
    copyOfstartingArr.push(copyOfelementsArr.pop());
    if (copyOfstartingArr.reduce((a, b) => a + b) === target) {
      // if true return true. 
      return true;
    } else {
      i++
    }
  }
  // if it continues through the entire array and target number is not reached, return false. 
  return false;
}


function twoSum(arr, n) {
  // guard cases
  if (!arr || !(Array.isArray(arr)) || !arr[0] || typeof n !== 'number') return false;
  // utilize a set object that will be passed into helper function. 
  const array = [];
  let i = 0;
  // add the first element of the arr into the set object. 
  array.push(arr[i]);
  let copyOfRemainingElementsArr = arr.slice(i + 1);
  while (!(addElementsAndCheckArray(array, copyOfRemainingElementsArr, n)) && i < arr.length) { // while this returns false
    i += 1;
    array.push(arr[i]);
    copyOfRemainingElementsArr = arr.slice(i + 1);
  }
  return true;
}
console.log(twoSum([1,2,3], 3))

module.exports = twoSum;
