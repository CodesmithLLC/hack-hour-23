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
	const counts = array.reduce( (accum, cur) => {
		accum[cur] = accum[cur] + 1 || 1;
		return accum;
	}, {})

  const mean = Math.floor(array.reduce( (accum, cur) => accum += cur, 0) / array.length)

  let maxMode = 0
  let maxFreq = 0

  for (let i in counts) {
    if  (counts[i] >= maxFreq && i > maxMode) {
      maxFreq = counts[i];
      maxMode = parseInt(i);
    }

   
  }
  //console.log("mode: " + maxMode, "average " + mean, typeof maxMode, typeof mean)
   return maxMode === mean;
}

module.exports = modemean;
