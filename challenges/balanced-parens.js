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
  if (input.length <= 1) return false;
  input = input.split('');
  let stack = [];

  const allMatches = input.every(char => {
    //add openers to the stack
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
      return true;
    }

    //check if closer matches top of stack
    if (char === ")" || char === "]" || char === "}") {
      let temp = stack.pop();
      switch(char) {
        case ')':
          if (temp === '(') return true; 
        case ']':
          if (temp === '[') return true;
        case '}':
          if (temp === '{') return true;
        default:
          return false; //mismatch
      }
    }

    //ignore other characters
    return true;
  })

  //check to see if stack is empty
  return (allMatches && stack.length === 0);
}
console.log(balancedParens('(())')); // true
console.log(balancedParens("[](){}")); // true
console.log(balancedParens("[({})]"));   // true
console.log(balancedParens("[(]{)}")); // false
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false

module.exports = balancedParens;
