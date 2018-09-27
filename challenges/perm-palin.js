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
  if (str.length <= 1) return true;
  let chars = new Set();
  let char;

  for (let i = 0; i < str.length; i++) {
    char = str[i];
    if (chars.has(char)) chars.delete(char);
    else chars.add(char);
  }
  return chars.size <= 1;
}

console.log(permPalin('abab')) //=> true
console.log(permPalin('cbaba')) //=> true
console.log(permPalin('cbac')) //=> false
console.log(permPalin('a')) //=> true

module.exports = permPalin;