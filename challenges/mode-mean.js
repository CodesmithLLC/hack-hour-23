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
  const mean = Math.floor(array.reduce((a, b) => a + b)/array.length);
  const count = array.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {})
  const occurances = [];
  for (let num in count) {
    occurances.push(count[num]);
  }
  let mode;
  for (let num in count) {
    if (count[num] === Math.max(...occurances)) {
        mode = num;
    }
  }
  if (mode === mean) return true;
  return false;
}

module.exports = modemean;
