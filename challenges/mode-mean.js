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
  let mean = Math.floor(array.reduce((a,b) => a + b) / array.length);   // Math.floor the mean
  let mode = []; // hold values of multiple modes
  let maxMode; // will be assigned max Mode later

  // use reduce to count how many times an element appears in the array
  let numberCounter = array.reduce((obj, val) => {
    if (!obj[val]) {
      obj[val] = 1;
      return obj;
    } else {
      obj[val]++;
      return obj;
    }
  }, {});

  // obtain the highest value in the object
  let maxValueInObject = Math.max(...Object.values(numberCounter))
  // iterate through the number counter object, push modes into mode array
  for (let key in numberCounter) {
    if (numberCounter[key] === maxValueInObject) {
      mode.push(key);
    }
  }
  // assign value of mode to the max of the modes if there are multiple modes
  maxMode = Math.max(...mode)
  return mean === mode;
}

module.exports = modemean;
