/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    //sort from smallest or most negative to most positive
    const arraySort = array.sort((a,b) => a-b);
    const highestPositive = [array[array.length -3], array[array.length -2], array[array.length -1], ]
    //if there are two negative numbers, and if their product is greater than the product of
    //the third and second largest numbers. Can only work with two positive numbers so the 
    //negatives can cancel out. 
    if (array[0] < 0 && array[1] < 0 && array[0] * array[1] > highestPositive[0] * highestPositive[1]) {
       const highestNegativeProduct = array[0] * array[1]
       return highestPositive[2] * highestNegativeProduct;
    }
    else return highestPositive[0] * highestPositive[1] * highestPositive[2];
}


module.exports = highestProduct;

