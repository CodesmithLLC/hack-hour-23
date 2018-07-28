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
  let total = 0;
  array.forEach(e => total += e);

  const mean = Math.floor(total / array.length);
  const obj = {};
  array.forEach((e) => {
    if (obj[e] === undefined) {
      obj[e] = 1;
    } else {
      obj[e]++;
    }
  });

  const modeIndex = Object.values(obj).indexOf(Math.max(...Object.values(obj)));
  const mode = Object.keys(obj)[modeIndex];
  if (mean === mode) return true;
  return false;
}

module.exports = modemean;
