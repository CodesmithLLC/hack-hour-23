/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let sortedArr = array.sort((a, b) => {return a-b});
    let bigNums = sortedArr.slice(-3);
    return bigNums.reduce(function(a, b){return a * b});
}

module.exports = highestProduct;
