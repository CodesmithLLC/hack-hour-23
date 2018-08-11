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
  // edge case: check if input is string
  if (typeof binary !== 'string') return undefined;
  // edge case: check if string is a number
  if (isNaN(parseInt(binary))) return undefined;
  // input string
  // split and reverse array
  const convert = binary.split('').reverse();
  // return integer
  const result = convert.reduce((acc, cur, index) => {
    if (index === 0) return (acc + (Number(cur) * 1));
    return (acc + (Number(cur) * 2 * index));
  }, 0);
  return result;
}

module.exports = binToDec;
