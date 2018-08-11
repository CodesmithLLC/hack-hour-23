/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {

  //first filter out values over the target
  const newArr = array.filter(elem => elem < target);
  
  //this is the total value of all array elements
  const newArrTot = newArr.reduce((initial, elem) => initial += elem);
  
  //sorting array elements from highest to lowest
  const newArrSorted = newArr.sort((a, b) => b > a)
  
  let difference = target - newArrTot; //next index to check
  

  if (newArrTot = target) {
    return true;
  } else if (newArrSorted.includes(difference)) {
    return true
  }


  for (let i = newArr.length - 1; i > 0; i--) {
    total += newArrSorted[i];

    for (var x = newArr.length - 2; x > 0; x--) {
      total += newArrSorted[i]
      if (total > difference)
    }
  }
return
}

module.exports = subsetSum;
