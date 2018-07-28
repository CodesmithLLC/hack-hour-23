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
  array.sort();
  // mean
  let mean = Math.floor(array.reduce((acc, currValue) => {
    return acc += currValue;
  }, 0) / array.length);
  
  // mode repeated numbers
  let mode = array.reduce((acc, currValue) => {
    if(acc[currValue]){
      ++acc[currValue];
    }else{
      acc[currValue] = 1;
    }
    return acc;
  }, {});

  let modeMax = 0;
  for(let key in mode){
    if(mode[key] > modeMax)
      modeMax = mode[key];
  }

  if(modeMax === mean)
    return true;
  else
    return false;
}

module.exports = modemean;


console.log(modemean([1]));