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
	//check if curr str is pal

  //recursively remove the last letter but dont overright the MAIN str

  //recursively remove first letter
  if (str.length === 1) {
    return true
  } else if (str.length === 2) {
    return false
  } else if (str.length > 2 ) {
      if (str === str.split('').reverse().join('')) {
        return true
      } else {
        let newStrFromStart = str.split('').slice(1, str.length).join('');
        let newStrFromStartEnd = str.split('').slice(0, str.length - 1).join('');
        return (permPalin(newStrFromStart) || permPalin(newStrFromStartEnd))
      }
    }
}

module.exports = permPalin;