/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */


//log of n time
function twoSum(arr, n) {
  //if not an array
  if (!Array.isArray(arr)) return false; 
  //no items in the array
  if (!arr[0]) return false;

  //sort the array so that our while loop works
  arr.sort(function(a,b){
    return a-b; 
  })

  let first = 0; //beginning of array
  let end = arr.length - 1 //end of array
  
  //loop through array. Check sum of first and last value. If too large, move "end" to the 
  //previous number. If too small, move "first" to the next number
  while(first !== end){
    console.log(first, end)
    if (arr[first] + arr[end] === n) return true; 
    else if (arr[first] + arr[end] < n) first++;
    else end--
  }
  return false;   
}

//solve in linear time
function twoSum2(arr, n) {
  //if not an array
  if (!Array.isArray(arr)) return false;
  //if no values in the array
  if (!arr[0]) return false; 

  const hashTable = {};
  
  for (let i = 0; i < arr.length; i += 1){
    const matchingNum = n - arr[i]
    //use the !! to make sure the key exists. without the "!!", then the value of a key
    //could be false or 0 and mess with our if
    if (!!hashTable[matchingNum]) return true; 
    else hashTable[arr[i]] = arr[i]
  }
  return false; 
}

console.log(twoSum2([1,2,10,5,6,7], 17))



module.exports = twoSum;
