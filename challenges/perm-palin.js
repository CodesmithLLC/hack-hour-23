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
  if (str.length === 1) return true;
  let sorted = str.split('').sort();
  while (sorted.length >=2) {
    if (sorted[0] === sorted[1]) {
      sorted.splice(0, 2)
    } else {return false}
  }
  return true;
}

module.exports = permPalin;