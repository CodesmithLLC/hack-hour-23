/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  if (!Array.isArray(array) || array.length <= 1) return [];
  const products = [];
  
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      // initial setup of products array
      if (j === 0 && i === 0) products.push(1);
      else if (i === 0) products.push(array[i]);
      // muliply
      else if (i !== j) products[j] *= array[i];
    }
  }
  return products;
}

console.log(getAllProducts([1,2,3]));

module.exports = getAllProducts;
