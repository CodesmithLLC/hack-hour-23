/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */
let aroooo = [3,6,4,8,4,2,7,0,8,6,4,2,10,18,15]
function twoSum(arr, n) {
  if (!arr.length) return false;

  const checker = {};
  let testNum;

  arr.forEach(function(ele, index){
    //console.log(n)
    //console.log(ele)
    testNum = n - ele
    console.log(testNum)
    

    if (n - ele === 0) return true;
    testNum = n - ele;
    //console.log(testNum)
    if (checker.hasOwnProperty(testNum)) return true;
    checker[ele] = 1;
  })
  return false;
}

console.log(twoSum(aroooo, 3))

module.exports = twoSum;
