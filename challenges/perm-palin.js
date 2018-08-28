/**
 * Given a string, determine0 if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
    if (str.length === 1) return true;
    let index = 0;
    let found = false;
    while (str.length / 2 > index) {
        if (str.includes(str.substring(index, index + 2), index + 1)) {
            found = true;
        }
        index++;
    }
    return found;
}

module.exports = permPalin;