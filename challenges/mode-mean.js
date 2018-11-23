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

// input: array of numbers.
// output: boolean, if the mode and mean are equal return true else false with the caveats listed above.
// calculate the mean and assign it to a variable.
// find the mode, if multiple then get max of the modes.
// time complexity is only (0)n since there are not nested loops
// three loops but still awesome and fast to use as stated above.

function modeMean(array) {
  // calculate the mean.
  const total = array.reduce(function(acc, curr) {
    return acc + curr;
  }, 0);
  const mean = Math.floor(total / array.length);

  // track and create key values for occurrences of the numbers.
  const tally = {};
  for (let num of array) {
    if (tally[num] === undefined) {
      // num doesn't exist in the object tally as a key then assign it assign value as 1;
      tally[num] = 1;
    } else {
      tally[num] += 1;
    }
  }

  // determine the mode and then find the one with most appearances, then get value and compare mean & mode
  let mode;
  let appearances = 0;
  Object.keys(tally).forEach(num => {
    const number = Number(num); // Object keys are strings so convert to number.
    if (tally[num] > appearances) {
      appearances = tally[num];
      mode = number;
    } else if (tally[num] === appearances && number > mode) {
      mode = number;
    }
  });
  return mode === mean;
}

console.log(modeMean([2, 3, 4, 5, 3, 5]));
console.log(modeMean([1, 3, 3, 5]));

module.exports = modeMean;
