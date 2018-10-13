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
  if (!Array.isArray(array1) || !Array.isArray(array2) || !Array.isArray(array3) || !Array.isArray(array4)) return [];
  let results1 = {};
  let results2 = {};

  // add all of first array to results1
  array1.forEach(item => {
    results1[item] = true;
  })

  // if there are any matches from array2, add that value to results2
  array2.forEach(item => {
    if (results1.hasOwnProperty(item)) results2[item] = true;
  })

  // clear results1
  results1 = {};

  // if there are any matches from array3, add that value to results1
  array3.forEach(item => {
    if (results2.hasOwnProperty(item)) results1[item] = true;
  })

  //clear results2
  results2 = {};

  // if there are any matches from array4, add that value to results2
  array4.forEach(item => {
    if (results1.hasOwnProperty(item)) results2[item] = true;
  })

  return Object.keys(results2);
}

var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
var array4 = ['ferret',12,12,45,9,66,77,78,2000];

console.log(commonElements(array1, array2, array3, array4));

module.exports = commonElements;
