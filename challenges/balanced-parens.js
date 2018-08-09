/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input) {
  const obj = {};
  input.match(/([\{\}\[\]\(\)])/g).forEach((x) => {
    if (!obj[x]) {
      obj[x] = 1;
    } else {
      obj[x] += 1;
    }
  });
  const keys = Object.keys(obj);
  const values = Object.values(obj);
}

balancedParens('123abc*!([{)]}');
module.exports = balancedParens;
