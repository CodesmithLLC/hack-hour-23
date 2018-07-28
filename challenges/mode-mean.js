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

    let mean = Math.floor(array.reduce(function(acc,curr) {
        return acc + curr;
    })/(array.length));


    let modes = [];
    let myObj = {};
    let myMax = 0;
    
    for (let i = 0; i < array.length; i++) {
      let myNumber = array[i]
      let count = 0;
      for (let j = 0 ; j < array.length ; j++) {
        if (myNumber === array[j]) {
          count++
          myObj[myNumber] = count;
        }
      }
      for (let key in myObj) {
        if (myObj[key] > myMax) {
          myMax = myObj[key]
        }
      }
      }

      for (let key in myObj) {
          if (myMax === myObj[key]) {
            modes.push(Number(key))
          }

      let myMode = 0;
      for (let m = 0; m < modes.length; m++) {
         myMode = Math.max(modes[m])
      }


      if (myMode === mean) {
        return true;
      } else {
        return false;
      }
    }
    
}

module.exports = modemean;