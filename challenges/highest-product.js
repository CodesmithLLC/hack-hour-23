/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array)) return 0;
  const negArray = [];
  let newArray = array.map(num => {
    if (num < 0) {
      negArray.push(num);
      return Math.abs(num);
    }
    return num;
  }).sort((a, b) => b - a);
  const negsToBeCalc = [];
  const numsToBeCalc = [];
  newArray.forEach(num => {
    if (negArray.includes(-1 * num) && negArray.length === 2) {
      negsToBeCalc.push(num);
    } else if (negArray.indexOf(-1 * num) === -1) {
      numsToBeCalc.push(num);
    }
  })
  let sortedArr = negsToBeCalc.concat(numsToBeCalc).sort((a, b) => b - a);
  if (sortedArr.length < 3) return 0;
  return sortedArr.slice(0, 3).reduce((a, b) => a * b);
}

//console.log(highestProduct([-20, -30, 8, 5, 27])); // should return 6000
module.exports = highestProduct;
var arr = [0];
console.log((arr == arr) && (arr == !arr));//