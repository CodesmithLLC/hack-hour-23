/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  return array.reduce((ac, cv) => {
    if (!ac[0]) ac.push(cv)
    else {
      for (let i = 0; i < ac.length; i += 1){
        console.log('this is cv', cv)
        console.log('this is ac', ac)
        //first value of cv is between one of the time ranges
        if (cv[0] >= ac[i][0] && cv[0] <= ac[i][1]){
          console.log('in first if')
          ac[i][1] = cv[1]
          return ac
        }
        //second value of cv is between one of the time ranges
        if (cv[1] >= ac[i][0] && cv[1] <= ac[i][1]){
          console.log('in second if')
          ac[i][0] = cv[0]
          return ac
        }
      }
      // not inbetween time ranges, push new time range
      ac.push(cv)
    }
    return ac; 
  },[])
}

function mergeRanges(array) {
  array.sort((a, b) => a[0] - b[0]);
  // initialize results
  const results = [array[0]];
  // loop through main array, starting at 1
  for (let i = 1; i < array.length; i += 1) {
    // examine the latest range in results
    const lastResult = results[results.length - 1];
    // does the current range overlap with the last result range?
    if (array[i][0] <= lastResult[1]) {
      // if so, modify latest range
      lastResult[1] = Math.max(lastResult[1], array[i][1]);
    }
    // otherwise create a new range
    else results.push(array[i])
  }
  return results; 
}

console.log(mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]))

module.exports = mergeRanges;
