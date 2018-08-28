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
        console.log(palCheck)
        console.log(palCheck.split('').reverse().join(''))
        if (palCheck === str.split('').reverse().join('') ) {
            isPally = true
            break;
        }
    }
    return isPally;
}
console.log(permPalin('cbac'))

module.exports = permPalin;