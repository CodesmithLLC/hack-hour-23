/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
    let isPally = false;
    let newStr = str.concat(str);
    for (let i = 0; i < newStr.length ; i++) {
        let palCheck = newStr.slice(i, str.length + i);
        if (palCheck === palCheck.split('').reverse().join('') ) {
            isPally = true
            break;
        }
        console.log(isPally)
    }
    return isPally;
}

module.exports = permPalin;