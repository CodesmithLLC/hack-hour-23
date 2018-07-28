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
  const mean = Math.floor(array.reduce((acc, cur) => { return acc + cur }) / array.length);
  const modeObj = {};
  const modeArr = [];
  let quantity = 0;
  let mode = 0;
  array.forEach((num) => {
    if (!modeObj[num]) modeObj[num] = 1;
    else modeObj[num] += 1;
  });
  const values = Object.values(modeObj);
  const keys = Object.keys(modeObj);
  quantity = Math.max(...values);
  keys.forEach((key) => {
    if (modeObj[key] === quantity) modeArr.push(parseInt(key));
  });
  mode = Math.max(...modeArr);
  return mean === mode;
}

module.exports = modemean;
