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


    let parensStack = [];
    let squareStack = [];
    let curlyStack = [];

    // use regex to filter only brackets
    // split to array
    let inputArr = input.split('')


    //iterate over array, push and pop to respective stacks
    for (let i = 0; i < inputArr.length; i++) {

        if (inputArr[i] === '(') {
            parensStack.push(inputArr[i])
        } else if (inputArr[i] === ')' && parensStack.length !== 0) {
            parensStack.pop()
        } else if (inputArr[i] === ')' && parensStack.length === 0) {
          return false;
        }
    }

  // check if any of the stacks have a length of 0, effectively checking balance...
    if (parensStack.length === 0) {
        return true;
    } else {
        return false;
    }
}


module.exports = balancedParens;
