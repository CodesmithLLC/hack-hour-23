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
  let counter = 0;
  while (sorted.length >= 3) {
    if (counter === 2) break;
    if (sorted[0] === sorted[1]) {
      sorted.splice(0, 2);
    } else if (sorted[0] !== sorted[1]) {
      sorted.reverse();
      counter++;
    }
  }
  if (sorted[0] === sorted[1]) return true;
  if (sorted.length > 1) return false;
  return true;
}

module.exports = permPalin;