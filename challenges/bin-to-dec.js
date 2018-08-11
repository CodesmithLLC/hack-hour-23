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

// input: string, representing a binary number
function binToDec(binary) {
    const splitIntoArray = binary.split('');
    const lengthOfArr = splitIntoArray.length - 1
    return splitIntoArray.reduce((res, num, i = 1) => {
        res += parseInt(num) * Math.pow(2, lengthOfArr - i);
        return res;
    }, 0)
}

console.log(binToDec('100'))

module.exports = binToDec;
