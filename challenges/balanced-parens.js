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

function balancedParens(input){
  const bracketTypes = [['[', ']'], ['(', ')'], ['{', '}']];
  let result = true;
  let stringArray = input.split('');

  bracketTypes.forEach(bracket => {
  let first = stringArray.indexOf(bracket[0]);
  let last = stringArray.lastIndexOf(bracket[1]);

  while(first >= 0 && last >= 0 && first < last) {
      stringArray = stringArray.splice(first, 1);
      stringArray = stringArray.splice(last, 1);
      first = stringArray.indexOf('(');
      last = stringArray.lastIndexOf('(');
    }
    if (first === -1 && last === -1) {
      return result = result && true
    }
    result = false
  })
  return result
}

module.exports = balancedParens;
