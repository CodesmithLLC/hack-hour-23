/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
//  */
// console.log(balancedParens('('));  // false
// console.log(balancedParens('()')); // true
// console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true
// // Step 2:
// //   make your solution work for all types of brackets
// // Example:
// console.log(balancedParens('[](){}')); // true
// console.log(balancedParens('[({})]'));   // true
// console.log(balancedParens('[(]{)}')); // false
// // Step 3:
// // ignore non-bracket characters
// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false


function balancedParens(input){
    let clearedArr = input.replace(/\w|[:.;= ]/g, '')
    const oppositeObj = {
        '{': '}',
        '}': '{',
        '[': ']',
        ']': '[',
        '(': ')',
        ')': '('
    }
    
    while (clearedArr.length !== 0){
        const currentBracket = clearedArr[0];
        clearedArr = clearedArr.slice(1);  
        search(currentBracket, clearedArr)
    }

    function search(bracket, remainingArray){
        let counter = 0;
        const oppositeBracket = oppositeObj[bracket]; 
        for (let j = 0; j < remainingArray.length; j++){
            if (remainingArray[j] === bracket) {
                return search(remainingArray[j], remainingArray.slice(j+1))
            }
            if (remainingArray[j] === oppositeBracket) {
                return true;
            }
        }
        return false; 
    }

}

module.exports = balancedParens;
