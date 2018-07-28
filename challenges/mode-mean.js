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
    const mean = array.reduce((acc, currentItem) => {
      return acc + currentItem / Math.floor(array.length); 
    });
    const mode = array.reduce((obj, currentItem) => {
      if(!obj[currentItem]){
          obj[currentItem] = 1;
      }else {
        obj[currentItem]++
      }
      return obj; 
   }, {});
      if(mean === mode) {
          return true; 
      } 
  }
  

module.exports = modemean;


//Mode - value that occurs most in set
//Mean - Value when adding all values and dividing by number of values

//input: set of values
//Output: Bool if mean and mode are equal. 


//To get the the mode: 
//Object with all the occurances, return the key with the highest value. 
//init object. 
//Iterage over the array.
//if the object[key] === undefined...
//add the current value to the array as a key. 
//if the currentvalue in the array is equal to the current Key..
//incremnet the value++ 
//return the key with the highest value to get the mode.


// function uniqeNumber(array) {
//   const results = array.reduce((obj, currItem) => {
//    if(!obj[currItem]) {
//      obj[currItem] = 1;
//    } else {
//      obj[currItem]++; 
//    }
//    return obj;
//   }, {});
//   for(let item in results) {
//     if(results[item] == 1) {
//       return item; 
//     }
//   }
// }