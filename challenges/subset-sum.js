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
  let result = false;
  //keep track of the sets
  const powerSet = [[]];

  array.forEach(num => {
    //save the current size of the set of sets because we will be pushing to it
    const powerSetSize = powerSet.length;
    for (let i = 0; i < powerSetSize; i++) {
      //get sum of current set
      const sum = powerSet[i].reduce((a, b) => a + b, 0);
      //found target

      if (sum + num === target) result = true;
      //if the sum of the array plus a new number is less than the target, add a new set to the array
      else {
        const clone = Array.from(powerSet[i]);
        powerSet.push(clone);
        powerSet[powerSet.length - 1].push(num);
      }
    }
  })
  return result;
}

console.log(subsetSum([1], 1)); // -> true
console.log(subsetSum([3, 7, 4, 2], 5)); // - > true, 3 + 2 = 5
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)); // -> true, 3 + 12 + 5 + 12 = 32
console.log(subsetSum([8, 2, 4, 12], 13)); // -> false
console.log(subsetSum([8, -2, 1, -3], 6)); // -> true, 8 + 1 + (-3) = 6

module.exports = subsetSum;
