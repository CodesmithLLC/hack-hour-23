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

  let newInput = input.split('')
  
  while (input.includes('()') || input.includes('{}') || input.includes('[]')) {
    if (newInput[newInput.indexOf(')') - 1] === '(') {
        newInput.splice(newInput.indexOf(')') - 1, 2)
      } else if  (newInput[newInput.indexOf('}') - 1] === '{') {
        newInput.splice(newInput.indexOf('}') - 1, 2)
      } else if (newInput[newInput.indexOf(']') - 1] === '[') {
        newInput.splice(newInput.indexOf(']') - 1, 2)
      }
      input = newInput.join('')
    }
  
   return !(input.includes('(') || input.includes('{') || input.includes('['))
 }

module.exports = balancedParens;
