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

  const occurances = {};
  occurances[array[0]] = 1;

  //calculate the mean
  //reduce the array via a summation and then divide that number by the .length

  const sum = array.reduce((acc, current) => {
    if(occurances[current]){
      occurances[current]++;
    } else {
      occurances[current] = 1;
    }
    return acc += current;
  })
  const mean = Math.floor(sum / array.length);
  const uniques = Object.keys(occurances);
  

  const counts = [];
  uniques.forEach((number)=>{
    let count = occurances[number];
    counts.push(count);
  });

  const max = Math.max(...counts);
  const possibleModes = [];
  
  uniques.forEach((number)=>{
    if (occurances[number] === max) possibleModes.push(number);
  })

  const mode = Math.max(...possibleModes);

  return mean === mode;
}


module.exports = modemean;
