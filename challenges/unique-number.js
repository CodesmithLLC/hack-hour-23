/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 * 
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  if (!Array.isArray(array)) return undefined;
  return array.reduce((acc, cur) => acc ^ cur);
}

console.log(uniqueNumber([1, 2, 1, 3, 3, 5, 5]));
module.exports = uniqueNumber;
