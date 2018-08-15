// Some languages have "if" statements that are closed by "fi" instead of curly brackets. 
//Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that 
//all words in a string are "closed". Write a function that takes a string and returns true if every word 
//is closed by its backwards counterpart. Words must be separated by space or punctuation.

console.log(matchWord('__END_DNE-----'));  // true
console.log(matchWord('__ENDDNE__'));  // false       (not separated by a space)
console.log(matchWord('IF()()fi[]'));  // true        (should be case-insensitive)
console.log(matchWord('for__if__rof__fi'));  // false     not properly closed. like ( [) ] 
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));  // true
console.log(matchWord(''));  // true

function matchWord(str) {
  str = str.toUpperCase(); 
  str = str.split(''); 
  const myStack = [];
  let tempStack = '';
  const regex = /[A-Za-z]/i
  for (let i = 0; i < str.length; i += 1) {
    if (regex.test(str[i])) {
      tempStack += str[i]; 
    }
    else {
      if (tempStack.length > 0) {
        const word1 = myStack[myStack.length-1]
        const word2 = tempStack.split('').reverse().join(''); 
        if (word1 === word2){
          myStack.pop();
          tempStack = ''; 
        }
        else {
          myStack.push(tempStack);
          tempStack = ''; 
        }
      }
    }
  }
  //if we're at the end of str, and myStack is equal to the reverse of tempStack
  if (myStack[myStack.length-1] === tempStack.split('').reverse().join('')) myStack.pop(); 
  //if myStack is empty, then the condition is balanced. 
  return (myStack.length === 0)
}


module.exports = matchWord;
