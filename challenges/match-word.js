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
  // input = string
  // edge case = nonstring input
  if (typeof str !== 'string') return undefined;
  // edge case = empty string
  if (str.length === 0) return true;
  let isMatched = false;
  const result = [];
  let wordPush = '';
  const filterStr = str.toLowerCase().replace(/[^a-z ]+/g, ' ').replace(/ +/g, ' ').trim().split('');
  for (let i = 0; i < filterStr.length; i++) {
    if (filterStr[i] !== ' ') {
      if (i === filterStr.length - 1) {
        wordPush += filterStr[i];
        result.push(wordPush);
      } else {
        wordPush += filterStr[i];
      }
    } else {
      result.push(wordPush);
      wordPush = '';
    }
  }
  if (result.length % 2 !== 0) return false;
  for (let j = 0; j < result.length - 1; j++) {
    if (result[j] === result[result.length - 1 - j].split('').reverse().join('')) isMatched = true;
  }
  // output = boolean
  return isMatched;
}

module.exports = matchWord;
