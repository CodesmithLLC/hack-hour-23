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
    let opens = ['(', '[', '{'];
    let closeds = [')', ']', '}'];
    let newStr = input.match(/[(){}\[\]]/g);
    
    //close closest ones first, otherwise return false
    let lastOpen = [];
    //let lastClose = [];
    for (let i = 0; i < newStr.length; i++) {
      if (closeds.includes(newStr[0])) {
        return false;
      } else if (opens.includes(newStr[i])) {
        lastOpen.push(newStr[i]);
      } else if (closeds.includes(newStr[i]) && 
      closeds.indexOf(newStr[i]) === opens.indexOf(lastOpen[lastOpen.length - 1])) {
        lastOpen.pop(); //update lastClose
      } else if (closeds.includes(newStr[i]) && 
      closeds.indexOf(newStr[i]) !== opens.indexOf(lastOpen[lastOpen.length - 1])) {
        return false;
      }
      //keep track of last open,
      //first close must close the most current open
    }
    if (lastOpen.length === 0) return true;
    else return false;
    
  }


module.exports = balancedParens;
