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

const num = [1, 2, 3, 4, 5, 6, 5];

modemean(num);

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
  console.log(Object.values(obj));
  const mode = Math.max(...Object.values(obj));
  if (mean === mode) return true;
  return false;
}

module.exports = modemean;
