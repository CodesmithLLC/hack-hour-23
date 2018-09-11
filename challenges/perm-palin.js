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
  const letters =  {};
  let oddLetter = 0;
  
  str.split('').forEach( letter => {
    letters[letter] = letters[letter] + 1 || 1
  })

  return Object.keys(letters).every( letter => {
    if (letters[letter] % 2 !== 0) oddLetter++
    return letters[letter] % 2 === 0 || oddLetter < 2;
  })
}

module.exports = permPalin;