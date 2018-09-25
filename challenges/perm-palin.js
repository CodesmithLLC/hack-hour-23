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
  // if str.length is 1, true
  // iterate
  // each iteration, recursion
  // inside of iteration, declare func
  // in func, base is string.length is 0
  // copy str, splice str
  // check if same as str
  // if come out of iterate, return false

  if(str.length === 1) return true;
  let found = 0;
  for(let i=0; i<str.length; i++){
    let string = str.slice();
    function palin(){
      

    }
  }
}

module.exports = permPalin;