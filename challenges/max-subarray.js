/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  const sum = [0];

  // iterate through the array
    //walk through the entire array at that element and keep track of the sum 
    
  while(arr.length !== 0){
    let sumOfIndex = 0;
    let temp = 0;
    for(let x = 0; x < arr.length; x += 1){
      temp += arr[x];
      if(temp > sumOfIndex){
        sumOfIndex = temp;
      }
    }
    sum.push(sumOfIndex);
    arr.shift();
  }
  
  return Math.max(...sum);
}

// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]))

module.exports = maxSubarray;
