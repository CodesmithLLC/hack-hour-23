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
  // if it has one side of the parens/bracket there has to be a closing parens/bracket
  const newStr = input.replace(/[^\[\]\(\)\{\}]/g, '');
  console.log(newStr);
  const open = ['(', '[', '{'];
  const close = [')', ']', ')'];
  
  if(newStr.length % 2 !== 0){
    return false;
  }else{
    // let firstHalf = newStr.slice(0, newStr.length / 2);
    // let secondHalf = newStr.slice(newStr.length - 1, newStr.length);
    
    // for(let i = 0; i < newStr.length / 2; i++){

    // }
    let stack = new Array();
    
  }

}

balancedParens(' var wow  = { yo: thisIsAwesome() }');

module.exports = balancedParens;
