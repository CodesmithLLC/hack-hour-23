/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
//  */
console.log(balancedParens('('));  // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true
// // Step 2:
// //   make your solution work for all types of brackets
// // Example:
console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false
// // Step 3:
// // ignore non-bracket characters
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false

function balancedParens(input){
    const clearedArr = input.replace(/\w|[:.;= ]/g, '')
    const tracker = [];
    const matches = {
        '{': '}',
        '[': ']',
        '(': ')',
    }
    for (let i = 0; i < clearedArr.length; i += 1){
        if (clearedArr[i] in matches) tracker.push(clearedArr[i]);
        else if (clearedArr[i] === ')' || clearedArr[i] === ']' || clearedArr[i] === '}'){
            if (clearedArr[i] !== matches[tracker.pop()]) return false; 
        }
    }
    return tracker.length ===0; 
}

module.exports = balancedParens;
