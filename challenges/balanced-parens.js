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
    let leftCurly = -1;
    let rightCurly = -1;
    let leftSquare = -1;
    let rightSquare = -1;
    let leftParen = -1;
    let rightParen = -1;

    let leftCCount = 0;
    let rightCCount = 0
    let leftSCount = 0;
    let rightSCount = 0;
    let leftPCount = 0;
    let rightPCount = 0;

    let result = true;

    for(let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case "{":
              if(leftCurly === -1)
                leftCurly = i;
              leftCCount ++;
              break;
            case "}":
              rightCurly = i;
              rightCCount ++;
              break;
            case "[":
              if(leftSquare === -1)
                leftSquare = i;
              leftSCount++;
              break;
            case "]":
              rightSquare = i;
              rightSCount++;
              break;
            case "(":
              if(leftParen === -1)
                leftParen = i;
              leftPCount++;
              break;
            case ")":
              rightParen = i;
              rightPCount++;
              break;
        }
        if(result) {
            if(leftCCount === rightCCount && leftCurly !== -1){
                result = balancedParens(input.slice(leftCurly+1, rightCurly));
                i = rightCurly;
                rightCurly = -1;
                leftCurly = -1;
            } else if (leftSCount === rightSCount && leftSquare !== -1) {
                result = balancedParens(input.slice(leftSquare+1, rightSquare));
                i = rightSquare;
                rightSquare = -1;
                leftSquare = -1;
            } else if (leftPCount === rightPCount && leftParen !== -1){
                result = balancedParens(input.slice(leftParen+1, rightParen));
                i = rightParen;
                rightParen = -1;
                leftParen = -1;
            }
        }
    }
    return result && (leftCurly === -1 && rightCurly == -1 && leftSquare === -1 && rightSquare === -1 && leftParen === -1 && rightParen === -1);
}

//REFACTOR - HANNAH
// function balancedParens(input) {
//   let stack = [];
//   for(let i = 0; i < input.length; i++) {
//     if(input[i] === "{" || input[i] === "(" || input[i] === "["){
//       stack.push(input[i]);
//     } else {
//       switch (input[i]) {
//         case "}":
//           if(stack.pop() !== "{")
//             return false;
//           break;
//         case ")":
//           if(stack.pop() !== "(")
//             return false;
//           break;
//         case "]":
//           if(stack.pop() !== "[")
//             return false;
//           break;
//         default:
//           break;
//       }
//     }
//   }
//   return true;
// }

module.exports = balancedParens;
