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
  const obj = {
    parens: 0,
    curly: 0,
    brackets: 0,
  };
  let index = 0;

  while (i < input.length - i) {
      if ()
  }

  //   for (let i = 0; i < input.length; i++) {
  //     if (input[i] === '(') {
  //       obj.parens += 1;
  //     } else if (input[i] === '[') {
  //       obj.brackets += 1;
  //     } else if (input[i] === '{') {
  //       obj.curly += 1;
  //     } else if (input[i] === ')') {
  //       obj.parens -= 1;
  //       if (obj.parens < 0) {
  //         return false;
  //       }
  //     } else if (input[i] === '}') {
  //       obj.curly -= 1;
  //       if (obj.curly < 0) {
  //         return false;
  //       }
  //     } else if (input[i] === ']') {
  //       obj.brackets -= 1;
  //       if (obj.brackets < 0) {
  //         return false;
  //       }
  //     }
  //   }

  if (obj.parens === 0 && obj.curly === 0 && obj.brackets === 0) {
    return true;
  }
  return false;
}

module.exports = balancedParens;
