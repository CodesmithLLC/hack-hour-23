/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length < 3 || Array.isArray(array)) {
        return 0;
    }

    let sortedArr = array.sort((a, b) => {return a-b}); // sort the array in ascending order.
    
    function testPositive(arr) { // will test to see if every number in an array is positive.
        return arr > 0
    }
    if (sortedArr.every(testPositive)) { // if every number in an array is positive, multiply the last 3 in the array together.
        let bigNums = sortedArr.slice(-3);
        return bigNums.reduce(function(a, b){return a * b});
    } else {
        let bigPos = sortedArr.slice(-3); // take biggest 3 numbers
        let bigNeg = sortedArr.slice(0,3) // take smallest 3 numbers
        let bigPosRed = bigPos.reduce((accu, curre) => {
            return accu * curre; // multiply largest 3 together
        })
        let bigNegRed = bigNeg.reduce((accu, curre) => {
            return accu * curre; // multiply smallest 3 together
        })
        return Math.max(bigPosRed, bigNegRed) // return the max val out of the two
    }
}

module.exports = highestProduct;
