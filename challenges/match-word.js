// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

//console.log(matchWord('__END_DNE-----'));  //-> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
//console.log(matchWord('for__if__rof__fi'));  //-> false     not properly closed. like ( [) ] 
//console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')); // -> true
console.log(matchWord('')); // -> true
//regex = /[\S]/g to grab all characters

function matchWord(str) {
  const array = str.replace(/[\W\s_]/g, ' ').toLowerCase().split(' ').filter(word => word.length >= 1);
  const tracker = [];
  array.forEach(word => {
    if (tracker.indexOf(reverseString(word)) === -1) {
      tracker.push(word);
    } else if (tracker.indexOf(reverseString(word)) === tracker.length - 1){
      tracker.pop();
    } else {
      return false;
    }
  })
  if (tracker.length === 0) return true;
  else return false;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}
module.exports = matchWord;
