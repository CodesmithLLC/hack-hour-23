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
   //exception cases
   if (array.length === 0) return false;
   if (array.length === 1) return true;

   //find average and round it down
   const mean = Math.floor(array.reduce((acc, next) => acc + next) / array.length);

   //find count for every num in array
   const counter = array.reduce((acc, next) => {
      if (acc[next] === undefined) acc[next] = 1;
      else acc[next] += 1;
      return acc;
   }, {})

   //cycle through the counts to find the mode
   let mode;
   for (let key in counter) {
      if (!mode) mode = key;
      else if (counter[key] > counter[mode]) mode = key;
      else if (counter[key] === counter[mode] && key > mode) mode = key;
   }

   //mode will be a string, mean will be a num
   return mode == mean;
}

module.exports = modemean;
