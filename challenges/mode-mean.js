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
  if(array.length === 1){
    return true;
  }
  let hashMap = {};
  let total = 0;
  array.reduce((elm) => {
    hashMap[elm] = hashMap[elm] ? hashMap[elm] + 1 : 1;
    total += elm;
  });

  let currentHighest = 0;
  let highestKey;
  for(let key in hashMap){
    if(hashMap[key] === currentHighest) {
      highestKey = key > highestKey ? key : highestKey;
    }
    if(hashMap[key] > currentHighest) {
      highestKey = key;
    }
  }
  return highestKey === Math.floor(total / array.length);
}

module.exports = modemean;
