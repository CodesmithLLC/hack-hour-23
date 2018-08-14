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
  const matches = {
    end: 'dne',
    if: 'fi',
    for: 'rof',
    while: 'elihw',
    try: 'yrt'
  };
  const keywords = str.match(/while|try|for|end|if|elihw|yrt|rof|dne|fi/g);
  const stack = [];

  let result = true;
  keywords.forEach(keyword => {
    if (matches[keyword]) stack.push(matches[keyword]);
    else {
      if (keyword !== stack.pop()) {
        result = false;
        return;
      }
    }
  });
  return result;
}

module.exports = matchWord;
