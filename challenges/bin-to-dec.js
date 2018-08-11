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
  // split binary string to array
  // iterate through array from 0 to length
  // for each iteration add up 2^(length - index - 1) * the number at that index

  // binary to decimal
  if (typeof binary === 'string') {
    const temp = binary.split('');
    let result = 0;

    for (let x = 0; x < temp.length; x += 1) {
      result += Math.pow(2, temp.length - x - 1) * Number(temp[x]);
    }
    return result;
  }

  if (typeof binary === 'number') {
    let result = decToBin(binary);
    return result;
  }
  
  // decimal to binary
  function decToBin(number) {
    let result = '';
    let isOdd = false;
    if (number % 2 === 1) {
      isOdd = true;
    }

    if (number !== 1) {
      if(number % 2 === 0){
        result += '0'
      }else {
        result += '1';
      }
      return decToBin(Math.floor(number / 2))+ result;
    }
    if(!isOdd) {
      return '0';
    }else{
      return '1';
    }
  }
}

module.exports = binToDec;
