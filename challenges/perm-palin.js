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

  function permutations(s) {
  var perms = [s];
  for (let i = 0; i < s.length; i++) {
    for (let str of permutations(s.substr(0,i) + s.substr(i + 1))) {
      if (perms.indexOf(s[i] + str) === -1) perms.push(s[i] + str);
    }
  }
  return perms;
}


  const isPal = str => str === str.split('').reverse().join('')
  
  return permutations(str).some( s => isPal(s) )
}

module.exports = permPalin;