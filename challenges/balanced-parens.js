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

// misread directions - case does not work for bracket types that are out of place 
// function will look for correct number of pairs
function balancedParens(input){ 
    // edge case - must be a string
    if (typeof input !== 'string') return false;

    const collectingBracketTypes = {
        '[': 0,
        ']': 0,
        '{': 0,
        '}': 0,
        '(': 0,
        ')': 0,
    }
    const splitStringIntoArray = input.split('');
    const bracketTypeKeys = Object.keys(collectingBracketTypes);

    splitStringIntoArray.reduce( (obj, char) => {
        // if you come across any of the keys above, increment 
        if (bracketTypeKeys.includes(char)) {
            obj[char]++
            return obj;
        }
    }, collectingBracketTypes);
    
    const objVals = Object.values(collectingBracketTypes)
    const booleans = []

    // traverse & check if elements are === 
    for (let i = 0; i < objVals.length; i +=2) {
        if (objVals[i] === objVals[i + 1]) {
            booleans.push(true)
        } else {
            booleans.push(false)
        }
    }
    // return a boolean 
    if (booleans.includes(false)) {
        return false;
    } else {
        return true
    }
}
module.exports = balancedParens;
