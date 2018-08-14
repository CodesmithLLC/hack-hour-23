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
    let num = 0;
    let tempArr = [];
    for(let digit of binary){tempArr.push(digit)}
    binary = tempArr; //this is just my own split algorithm, its faster than split

    binary.map((val, index, arr) =>{
        placePower = arr.length - index - 1;
        console.log(val, 2**placePower);
        num += (val * (2 ** placePower))
    })

    return num;
}

function decToBin(dec){
    let bin = '';
    let highestPowerOfTwo = 1;
  
    while(highestPowerOfTwo < dec){
      highestPowerOfTwo *= 2;
    } 
    highestPowerOfTwo /= 2;
    
    while(highestPowerOfTwo > 1){
      if(highestPowerOfTwo > dec){
        bin += '0';
      } else {
        bin += '1'
      }
        dec = dec % highestPowerOfTwo;
        highestPowerOfTwo /= 2;
    }
  
    return bin + dec;
  }

module.exports = binToDec;
