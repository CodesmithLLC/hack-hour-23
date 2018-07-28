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
  let mode;
  let mean; 
  let modeTotals = {};
  let meanSumReduced = 0;

  array.forEach(elem => {
    meanSumReduced += elem;
    if (modeTotals[elem]) {
      modeTotals[elem]++
    } else {
      modeTotals[elem] = 1;
    }
  })
  let modeTotalsKeys = Object.keys(modeTotals);
  
  modeTotalsKeys.sort((a, b) => modeTotals[b] > modeTotals[a]);
  mode = modeTotalsKeys[0];

  mean = Math.floor(meanSumReduced / array.length);
  
  return mean === mode
}

module.exports = modemean;
