/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  // declare 2 variables mode and mean
  let mode;
  let mean;
  const tempArr = [];
  // determine the mode of an array of numbers
  const tempObj = array.reduce((accum, current) => {
    if (!accum.hasOwnProperty(current)) accum[current] = 0;
    accum[current] += 1;
    return accum;
  }, {});
  for (const key in tempObj) {
    tempArr.push(tempObj[key]);
  }
  mode = Object.keys(tempObj).reduce((accum, current) => {
      if (tempObj[accum] > tempObj[current]) return accum
      accum = current
      return current
  });
  mean = Math.floor(array.reduce((a, b) => a + b, 0) / array.length);

  if (mean === mode) return true;
  return false;
}
const arr = [4, 4, 3, 4, 4];
console.log(modemean(arr));

module.exports = modemean;
