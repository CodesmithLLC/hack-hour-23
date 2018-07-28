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
    let count = 1;
    let mode;

    array = array.sort();
    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        let currCount = 1;
        for (let j = 0; j < array.length; j++) {
            if (current === array[j]) {
                currCount++;
            }
        }
        if (currCount > count) {
          mode = current;
          count = currCount;
        }
    }
    let mean = 0;
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    mean = Math.floor(sum / array.length);
    console.log(mode);
    console.log(mean);
    return (mode === mean)
}

module.exports = modemean;
