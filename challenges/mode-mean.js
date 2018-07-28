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
  //mean
  const sum = array.reduce((accu, curr) => accu+curr);
  const mean = Math.floor(sum/array.length);

  //mode
    //count object counts how many each num exists in array
  const count = {};
  for(let num of array){
    // if num doesn't exist in count, add it. then, count one
    if(!count[num]){
      count[num] = 1;
    } else{ //if already exists, raise 1
      count[num]++;
    }
  }

  //all keys in count
  const keys = Object.keys(count)
  //all values in count
  const values = Object.values(count);
  //index of highest value
  const indexOfKey = values.lastIndexOf(Math.max(...values))
  const mode = keys[indexOfKey]

  //type of mode is string while that of mean is number. therefore can't use strict equality
  return mean == mode;
}

module.exports = modemean;
