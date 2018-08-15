/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let prod = 1;
    let negProd = 0;
    if (array.length < 3 || Array.isArray(array) === false){
        return 0;
    }
    let newArr = array.sort();
    for (let i = 0; i <= 2; i++) {
        prod *= newArr[newArr.length - i - 1];
    }
    negProd = newArr[0] * newArr[1] * newArr[newArr.length - 1];
    if (negProd > prod) {
        return negProd;
    } else {
        return prod;
    }
}

module.exports = highestProduct;
