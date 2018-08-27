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
    if(str.length === 1) return true;

    let permTable = {};

    for(let i = 0; i < str.length; i++) {
        if(!permTable[str[i]]) {
            permTable[str[i]] = 1;
        } else {
            delete permTable[str[i]];
        }
    }

    return Object.keys(permTable).length <= 1;
}

module.exports = permPalin;