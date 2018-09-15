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
  let palinPossible = true  

  if (str.length === 1) return true;
  if (!str.length) return false  

  function innerPermPalin(str) {
  tempStr = str.substring(1, str.length)
  if (str[i] === str[str.length] && palinPossible === true)  {
    

    }
  }
}

module.exports = permPalin;