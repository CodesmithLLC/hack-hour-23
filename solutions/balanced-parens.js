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
  input = input.match(/[\{\}\(\)\[\]]/g)
  input = input.join("")

  if (input.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < input.length / 2; i++) {
    input = input.replace("()", "")
    input = input.replace("[]", "")
    input = input.replace("{}", "")
  }

  return input.length === 0 ? true : false;

}

module.exports = balancedParens;