/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

    if (array.length === 1) {
        return array[0];
    }

    if (array.length <= 0) {
        return "Error: Please pass in an array with at least three elements."
    }

    // sort order of array from highest to lowest
    array = array.sort((a, b) => b-a);
    //console.log(array);

    // grab first three elements of array and multiply together
    return array[0] * array[1] * array[2];
    
}

console.log(highestProduct([5, 4, 2, 9, 4, 6]));

module.exports = highestProduct;

