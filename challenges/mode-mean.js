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
  let length = 0;
  let total = 0;
  const used = {}
  array.forEach((num, i) => {
    length = i;
    total += num;
    if (!used[num]) {
      used[num] = [num]
    } else {
      used[num] = [...used[num], num]
    }
  })
  let mode = 0;
  for (let prop in used) {
    if (used[prop].length > mode)
    mode = Number(prop)
  }
  const mean = total / length
  retiurn mean === mode
}

module.exports = modemean;
