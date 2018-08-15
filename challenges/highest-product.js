/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    array.sort((a, b) => b - a);
    return array.slice(0, 3).reduce((acc, curr) => acc *= curr, 0);
}

module.exports = highestProduct;
