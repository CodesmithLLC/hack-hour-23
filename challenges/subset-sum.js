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
  // sort array
  // set sum = first element of array
  // while sum < target
  // sum += array[index]
  // if sum > target, return false
  // if sum === target, return true
  let sum = 0;
//   const indexShift = 0;
   array.sort((a, b) => a - b);
//   console.log(array);
//   // iterate through sorted array
//   // while array[x] <= target
//   //
//   while (array.length !== 0) {
//     sum = 0;
//     for (let x = 0; x < array.length; x += 1) {
//       sum += array[x];
//       console.log(sum);
//       if (sum === target) return true;
//     }
//     array.shift();
//     console.log(array);
//   } 
//   return false;
  for (let x = 0; x < array.length; x += 1) {
    sum += array[x];
    console.log(sum);
    if (sum === target) return true;
  }
  return false;
}

// const myArray = [3, 7, 4, 2];

// console.log(subsetSum(myArray, 5));

module.exports = subsetSum;
