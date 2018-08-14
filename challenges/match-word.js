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
    if (str === ' ') return true;
    const front = [];
    const back = [];
    str = str.split('');
  
    while (!str[0].match(/[A-Za-z]/g)) {
      str.splice(0, 1);
    }
  
    while (!str[str.length - 1].match(/[A-Za-z]/g)) {
      str.splice (-1, 1);
    }
  
    while (0 < str.length - 1 && str[0].match(/[A-Za-z]/g)) {
      if (str[0].match(/[A-Za-z]/g)) {
        front.push(...str.splice(0, 1));
      } else {
        str.splice(0, 1);
      }
      if (str[str.length - 1].match(/[A-Za-z]/g)) {
        back.push(...str.splice(-1, 1));
      } else {
        str.splice(-1, 1);
      }
    }
  
    if (!str.length) return false;
    if (front.join('').toLowerCase() === back.join('').toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }

module.exports = matchWord;
