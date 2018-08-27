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
  const chars = {};
  let oddLetters = 0;

  // edge case, no string
  if(str.length === 0) return false;

  // count number of each letter in the string
  for(let char = 0; char < str.length; char += 1) {
    if(chars[str[char]] === undefined){
      chars[str[char]] = 1;
    } else {
      chars[str[char]] += 1;
    }
  }
  
  // determine if there are more than 1 letters that are odd
  for(let key in chars) {
    if(chars[key] % 2 !== 0) {
      oddLetters += 1;
    }
  }
  
  return oddLetters > 1 ? false : true;
}

// console.log(permPalin(''));
module.exports = permPalin;