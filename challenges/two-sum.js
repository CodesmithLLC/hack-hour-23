/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (arr.length < 2) return false;
  const counts = arr.reduce((obj, number) => {
    obj[number] = (obj[number] || 0) + 1;
    return obj;
  }, {})
  console.log('counts', counts);
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (counts[n - arr[i]] || (counts[n - arr[i]] > 1 && (n - arr[i]) * 2 === n)) {
      counter += 1;
    }
  }
  if (counter > 0) return true;
  else return false;
}


console.log(twoSum([6, 2, 2, 3], 4));
module.exports = twoSum;
