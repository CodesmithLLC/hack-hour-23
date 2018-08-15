/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let prod = 1;
    if (array.length < 3){
        return "invalid";
    }
    let newArr = array.sort();
    for (let i = 0; i <= 2; i++) {
        prod *= newArr[newArr.length - i - 1];
    }
    return prod;
}

module.exports = highestProduct;
