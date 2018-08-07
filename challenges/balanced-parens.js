/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *                  ["'", "(", "(", ")", ")", "'"]
 *                              2,  3 // find last opening bracket, if the next found closing bracket is a matching one, remove the two index.
 *                  ["'", "(", ")", "'"] // recursively send in the array with those index removed.
 *                                       // return false if the next found closing bracket is not matching.
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example: 
 *  balancedParens('[](){}'); // true   1 + 3 + -3 + 5 = 6 // -5 + -4 + 4 -1 = -6
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *                  ["'""]
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
    let openingParens = ['"', "'", "[", "{", "("];
                        [1  ,  2 ,  3 ,  4 ,  5 ];
    let closingParens = ['"', "'", "]", "}", ")"];
                        [-1 , -2 , -3 , -4 , -5 ];
    let inputArr = [];
    for (let i = 0; i < input.length; i++) {
        inputArr.push(input[i]); // convert input string into an array
    }
    for (let j = 0; j < inputArr.length; i++) { // 
        if (openingParens.indexOf(inputArr[i]) === -1 || closingParens.indexOf(inputArr[i]) === -1) {

        }
    }
}

module.exports = balancedParens;
