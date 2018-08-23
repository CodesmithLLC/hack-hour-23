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
function openChecker(char) {
    const charList = ['{', '(', '[',];
    if (charList.indexOf(char) !== -1) return true;
    return false;
    
}
function closeChecker(char) {
    const charList = ['}', ')', ']',];
    if (charList.indexOf(char) !== -1) return true;
    return false;
    
}
function openCloseChecker()
console.log(charChecker('{'))

function balancedParens(input){
    const newArr = input.split('');
    const checkArr = [];
    for (let i = 0; i < newArr.length; i += 1) {
        if (openChecker(newArr[i]) || closeChecker(newArr[i])) checkArr.push(newArr[i])

    }
    for (let i = 0; i < checkArr.length; i += 1) {
        if (checkArr[])
    }

}
console.log(balancedParens('[](){}'))
module.exports = balancedParens;
