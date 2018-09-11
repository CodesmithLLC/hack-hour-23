/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let highestThreePositivesProduct;
  let highestThreeNegativesProduct;
  if (!Array.isArray(array) || array.length < 3) return 0;

  const highestThreePositives = array.filter( num => num > 0).sort((a,b) => b - a).slice(0,3)

  const highestThreeNegatives = array.filter( num => num < 0).sort((a,b) => b - a).slice(0,3);

  if (highestThreePositives.length >= 3) {
    highestThreePositivesProduct = highestThreePositives.reduce((a,b)=>a*b, 1);
  }

  if (highestThreeNegatives.length >= 3) {
    highestThreeNegativesProduct = highestThreeNegatives.reduce((a,b)=>a*b, 1);
  }

  const highestPositive = highestThreePositives[0];
  const highestTwoNegativesProduct = array.filter( num => num < 0).slice(0,2).reduce((a,b) => a*b);

  return Math.max(highestThreePositivesProduct || -Infinity, (highestPositive * highestTwoNegativesProduct) || -Infinity, highestThreeNegativesProduct || -Infinity);
}


module.exports = highestProduct;
