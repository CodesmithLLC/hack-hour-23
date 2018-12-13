// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4){

}

module.exports = commonElements;


// function commonElements(...inputArrays) {
//   // obtain de-duplicated arrays from inputArrays
//   const arrays = inputArrays.map(inputArray => Array.from(new Set(inputArray)));
  
//   // tally number of appearances of values
//   const tally = new Map();
//   for (const array of arrays) {
//     for (const val of array) {
//       if (!tally.has(val))
//         tally.set(val, 1);
//       else
//         tally.set(val, tally.get(val) + 1);
//     }
//   }
  
//   // results is [key, value] pairs with value being the number of input arrays
//   const results = Array.from(tally).filter(ele => ele[1] === arrays.length);
//   // return values if results array has at least one element
//   if (results.length)
//     return results.map(ele => ele[0]);
//   // otherwise, return 'Nothing in Common!'
//   else
//     return 'Nothing in Common!';
// }