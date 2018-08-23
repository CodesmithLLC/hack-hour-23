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
    let numberArr = binary.split('').reverse();
    return numberArr.reduce(function(accum, current, index){
        if (current == 1) {
            accum += Math.pow(2, index)
        }
        console.log(accum)
        return accum

    }, 0)

    

    


    // return parseInt(binary, 2 )

}
console.log(binToDec('0101'))

module.exports = binToDec;
