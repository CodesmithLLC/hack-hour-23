

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


// input: array argument of numbers.
// output: determine if the mode and mean of the array are equiv then return true else return false.
// Create a var to store the sum of an array's numbers. Divide the sum to obtain the mean and use math floor to make it a whole integer.
// Sort through the array and check to see if any integer repeats x2 and more, look at the most commonc occurring integer(s) for your mode value;
// Compare the mean and mode if they are equiv and pass the appopriate boolean.


function modeMean(array) {
  let arraySum = array.reduce(function(acc, curr) {  
    return (acc + curr);
  }, 0)
  let mean = Math.floor(arraySum / (array.length));
  let mode = array.reduce(function(acc, curr) { 
    if (curr in acc) {
	  acc[curr]++;
    } else {
	  acc[curr] = 1;
    }
    return acc;
  }, {})
  let values = Object.values(mode);
  let max = Math.max(...values);
  const maxModes = [];
  for (let keys in mode) {  
    if (max === mode[keys]) {
      maxModes.push(keys)
    }
  }
  let finalMode = Math.max(...maxModes);
  if (finalMode === mean) {
    return true
  } else {
  	return false
  }
} 

module.exports = modemean;
