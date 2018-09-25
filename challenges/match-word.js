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

function matchWord(str) {
  // '' empty string - true
  if(str === '') return true;

  // case INsensitive
  str = str.toLowerCase();
  str = str.split('');
  console.log(str)
  // words should be seperated by space/punctuation
  str.reduce((accu,curr) => {
    if(/([a-z])\w+/g.test(curr)){
      accu.concat(curr)
    } else if(/([a-z])\w+/g.test(accu) && !/([a-z])\w+/g.test(curr)) {
      //if accu is alphabet and curr is not
    }
  }, '')
}

module.exports = matchWord;
