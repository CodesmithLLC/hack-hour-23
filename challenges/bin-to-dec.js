/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
    binaryArr = [];
    for(let i = 0; i < binary.length; i++) {
        binaryArr.unshift(binary[i]);
    }
    return binaryArr.reduce((acc, elm, index) => {
        return acc + elm * Math.pow(2, index);
    }, 0);
}

function decToBin(decimal) {
    decimal = Number(decimal);
    return "" + (decimal <= 1 ? decimal % 2 : decToBin(Math.floor(decimal / 2)) + (decimal % 2));
}

module.exports = binToDec;
