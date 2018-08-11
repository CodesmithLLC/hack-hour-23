/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
 */
console.log(binToDec('0'))   //-> 0 
console.log(binToDec('11'))  //-> 3
console.log(binToDec('100')) //-> 4
console.log(binToDec('101')) //-> 5
console.log(binToDec('0101'))// -> 5
/*
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
    binarySplit = []; 
    for (let i = binary.length - 1; i >= 0; i--){
        binarySplit.push(Number(binary[i]))
    }
    const binaryTotal = binarySplit.reduce((ac,cv) => {
        if (cv === 0) return [ac[0], ac[1] + 1];
        else {
            let power = ac[1]
            const binarySum = ac[0] + Math.pow(2*cv, power)
            power++;
            return [binarySum, power]
        }
    }, [0, 0])
    return binaryTotal[0]; 
}


  // console.log(ac, cv)
        // ac[1] += 1; 
        // return ac[0] + Math.pow(cv*2,ac[1])
        // ac = [ac[0]+1, ac[1] + 1]
        // return ac; 

// const array1 = ['1','2','3'];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));

module.exports = binToDec;
