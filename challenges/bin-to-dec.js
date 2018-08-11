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

const binToDec = (binary) => {
  let array = binary.split('');
  return array.reduce((a, b, i = 1) => {
    a += parseInt(b) * Math.pow(2, array.length - 1 - i);
    return a;
  }, 0)
}
const decToBin = (dec, result = '') => {
  if (dec === 1) return (result + JSON.stringify(Math.floor(dec % 2))).split('').reverse().join('');
  result += JSON.stringify(Math.floor(dec % 2));
  return decToBin(Math.floor(dec/2), result);
}
console.log(decToBin(157));

module.exports = binToDec;
