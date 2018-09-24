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
  /* GUARD CLAUSE CHECK */
  if (str.length === 0 || typeof(str) !== "string") {
    return 0;
  }

  // Palindrome string must have even number of grouped chars
  // Also, palindrome string can have single unique char

  const bucket = {};
  const strArr = str.split("");
  
  for (let el of strArr) {
    if (bucket[el]) {
      bucket[el] += 1;
    } else {
      bucket[el] = 1;
    }
  }

  // Check for even grouped chars in bucket
  let oddCounter = 0;
  for (let key in bucket) {
    if (bucket[key] % 2 !== 0) {
      oddCounter += 1;
    }
  }

  if (oddCounter <= 1) {
    return true;
  } else {
    return false;
  }
 
}

module.exports = permPalin;