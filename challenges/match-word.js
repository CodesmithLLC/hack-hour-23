// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

  // input: string
  // output: return bool
  // additional: words must be separated by space or punc, case insensitive. 

function matchWord(str) {
  // edge case: if arg is an empty string, return true; 
  if (str === '') return true;
  // use recursion to go through the entire string. 
  // use regex to remove the punctuations at the beginning and end of the input string. 
  const regex = /^\W+|$\W+/g;
  const removePunc = str.replace(regex, '');
  // split the string into an array, seperated by words. 
  const splitStringIntoArray = removePunc.split(' ');
  // check the first element against the last element, lowercase both of them (case-insenstive)
  const begWord = splitStringIntoArray[0].toLowerCase();
  const lastWord = splitStringIntoArray[splitStringIntoArray.length - 1].reverse().toLowerCase(); // last word should already be reversed, reverse again for comparison check 
  // if true, pop & shift them off. Join the array as a string and pass it as an arg for recursive call
  if (begWord === lastWord) {
    splitStringIntoArray.pop();
    splitStringIntoArray.shift();
    return matchWord(splitStringIntoArray.join(' '));
  } else {
    // if false, exit out of function
    return false;
  }
}

module.exports = matchWord;
