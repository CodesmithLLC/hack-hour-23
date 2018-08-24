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
    const parensFirst = "(";
    const parentLast = "(";
    const bracketFirst = "[";
    const bracketLast = "]";
    const objFirst = "{";
    const objLast = "}";

    input = input.split("");
    const sum = input.reduce((acc,next)=>{
            if(next == "(") acc += 1
            else if(next == ")") acc += -1
            else if(next == "[") acc += 4
            else if(next == "]") acc += -4
            else if(next == "{") acc += 10
            else if(next == "}") acc += -10
      return acc;      
    },0)
    if(sum === 0) return true 
    return false

}

module.exports = balancedParens;
