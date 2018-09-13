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
  // if number of duplicate letters are even, ok
  // one single letter with even number of duplicate letters is ok
  const tracker = {};
  let counter = 0;
  for(let i = 0; i < str.length; i++) {
    if(tracker[str.charAt(i)] === 1) {
      tracker[str.charAt(i)] += 1;
    }else {
      tracker[str.charAt(i)] = 1;
    }
  }
  for(let value in tracker) {
    if(tracker[value] === 1) {
      counter++;
      if(counter > 1) {
        return false;
      }
    }
  }
  return true;
}

module.exports = permPalin;