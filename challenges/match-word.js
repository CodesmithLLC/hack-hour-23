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
  if (typeof str === 'string') {
    str = str.replace(/\W/gi, " ").replace(/_/gi, " ").trim();
    str = str.split(" ").filter(el => el !== "");
  }
  if (!str.length) return true;
  const reverse = str.shift().split("").reverse().join("").toLowerCase();
  let found = false;
  const newArr = [];
  str.forEach(el => {
    if (el.toLowerCase() === reverse) {
      found = true;
    } else {
      newArr.push(el.toLowerCase())
    }
  })
  console.log(found)
  console.log(reverse)
  console.log(newArr)
  if (found) {
    return matchWord(newArr)
  } else {
    return false
  }
}
//console.log(matchWord('__ENDDNE__'))
//console.log(matchWord('__END_DNE-----'));
//console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'))
//console.log(matchWord('IF()()fi[]'))
console.log(matchWord('for__if__rof__fi'))
//console.log(matchWord(''))

module.exports = matchWord;
