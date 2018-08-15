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
  // 0 -> 0
  // 01 -> 1
  // 10 -> 2
  // 11 -> 3
  // loop through the number of digits in the binary
    // check if the digit is whether a 0 or 1
    // the ith index should be used nth power of 2
    // maybe reverse the string first?
  let reversed = binary.split('');
  reversed = reversed.reverse();
  // reversed = reversed.join(''); // uncomment for for loop way
  // reduce way
  return reversed.reduce((acc, currValue, currIndex, arr) => {
    if(currValue === '1'){
      acc += Math.pow(2, currIndex);
    }
    return acc;
  }, 0).toString();
  
  // for loop way
  // let total = 0;
  // for(let i = 0; i < binary.length; i++){
  //   if(reversed.charAt(i) === '1'){
  //     total += Math.pow(2, i);
  //   }
  // }
  // return total.toString();
}

console.log(binToDec('0101'));


module.exports = binToDec;
