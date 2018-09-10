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

function permPalin(str, strArray = str.split('')) {
  //if (str.length === 1) return true;
  //
  
}

function permute(str) {
  const perms = [];
  if (str.length === 1) {
    perms.push(str);
    return perms;
  }
    //generate all permutations
  //for each char in the str, 
    //define innerPerms as 
  
}

console.log(permute('abab'));
console.log('hi');
module.exports = permPalin;