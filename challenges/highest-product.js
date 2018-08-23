/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const productArr = [];
  const finalArr = [];
  let tempNumber = 0;
  let finalProduct;
  array.forEach((current) => {
    if (productArr.length < 3) {
      productArr.push(current);
      finalArr.push(current);
    } else {
      tempNumber = current;
      productArr.forEach((element, index) => {
        let numberSwap;
        if (tempNumber > element) {
          numberSwap = element;
          finalArr.splice(index, 1, tempNumber);
          tempNumber = numberSwap;
        }
      });
    }
  });
  finalProduct = finalArr.reduce((accum, current) => accum * current);
  console.log(finalArr);
  return finalProduct;
}

console.log(highestProduct([3, 6, 8, 32, 9, 17, 3, 98]));
module.exports = highestProduct;
