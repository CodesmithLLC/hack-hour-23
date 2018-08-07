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
    const temp1 = input.slice(0,input.length/2).split('');
    const array1 = [];
    const temp2 = input.slice(input.length/2).split('').reverse();
    const array2 = [];

    if(input.length === 1) return false;

    temp1.forEach(function(character){
        if(character === '(' || character === ')' || character === '[' || character === ']' || character === '{' || character === '}'){
            array1.push(character);
        }
    });

    temp2.forEach(function(character){
        if(character === '(' || character === ')' || character === '[' || character === ']' || character === '{' || character === '}'){
            array2.push(character);
        }
    });

    for(let x = 0; x < array1.length; x++){
        if(array1[x] === ')' || array1[x] === ']' || array1[x] === '}')
            return false;

        if(array1[x] === '('){
            if(array2[x] !== ')'){
                return false;
            }
        }
        if(array1[x] === '['){
            if(array2[x] !== ']'){
                return false;
            }
        }
        if(array1[x] === '{'){
            if(array2[x] !== '}'){
                return false;
            }
        }
    }
    return true;
}

console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // fals
console.log(balancedParens('('));  // false
 console.log(balancedParens('()')); // true
 console.log(balancedParens(')('));  // false
 console.log(balancedParens('(())'));  // true

module.exports = balancedParens;
