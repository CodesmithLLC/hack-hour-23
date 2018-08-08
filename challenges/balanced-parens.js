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
    let brackChars = "()[]{}";

    let brackPairs = {"(":")",
                        "[":"]",
                        "{":"}"}

    const match = (char1, char2) => {
        return brackPairs[char1] === char2;
    }

    let bracksOnly = input.split('').filter((char)=>{return brackChars.includes(char)});
    //Filters out every character that isnt a bracket

    let index = 0;

    const findMatch = (index) => {
        let thisChar = bracksOnly[index];
        let nextChar = bracksOnly[index+1];

        if(match(thisChar, nextChar)){
            return true;
        }
    }
    
}

module.exports = balancedParens;
