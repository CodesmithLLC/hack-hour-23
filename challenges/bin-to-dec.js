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
  let strArr = binary.split("");
  for (let i = 0; i < strArr.length; i++) {
      if (strArr[0] === '0') {
          strArr.shift()
      }
  }
  let addHere = [];
  if (binary === '0') {return 0}

  

  for (let i = strArr.length; i >= 0; i--) {
      console.log(i)
    if (i === 10 && strArr[10] === "1") {
      addHere.push(1024);
    }
    if (i === 9 && strArr[9] === "1") {
      addHere.push(512);
    }
    if (i === 8 && strArr[8] === "1") {
      addHere.push(256);
    }
    if (i === 7 && strArr[7] === "1") {
      addHere.push(128);
    }
    if (i === 6 && strArr[6] === "1") {
      addHere.push(64);
    }
    if (i === 5 && strArr[5] === "1") {
      addHere.push(32);
    }
    if (i === 4 && strArr[4] === "1") {
      addHere.push(16);
    }
    if (i === 3 && strArr[3] === "1") {
      addHere.push(8);
    }
    if (i === 2 && strArr[2] === "1") {
      addHere.push(4);
    }
    if (i === 1 && strArr[1] === "1") {
      addHere.push(2);
    }
    if (i === 0 && strArr[0] === "1") {
      addHere.push(1);
    }
  }
  return addHere.reduce(function(acc, curr) {
    return acc + curr;
  });
}

console.log(binToDec(''))

module.exports = binToDec;
