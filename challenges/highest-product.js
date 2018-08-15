/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

    if (!Array.isArray(array)) {
        return 0;
    }
    
    if (array.length < 3) {
        return 0;
    }

    // sort order of array from highest to lowest
    array = array.sort((a, b) => b-a);
    console.log(array);

    // grab first three elements of array and multiply together
    return array[0] * array[1] * array[2];
    
}

console.log(highestProduct([-1, -6, -2, -7]));

module.exports = highestProduct;

