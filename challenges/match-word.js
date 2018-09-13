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
  const parseData = str.split(/[^A-Za-z]/g);
  const newParseData = parseData.filter((value) => {
    return (value !== '');
  });

  console.log(newParseData);

  const arr = [];
  // now that we have an array with all the 'keywords' try to compare with one another
  // to see if they are backwards (closing ends), case-sensitive
  // maybe use a stack to compare them?

  if(newParseData.length < 2){
    return true;
  }else{
    arr.push(newParseData.shift());
    while(newParseData.length > 0){
      // newParseDate] yrt for if fi rof elihw
      // arr] while try
      // arr.push(newParseData.shift());
      if(arr[arr.length - 1].split('').reverse().join('') === newParseData[0]){
        newParseData.shift();
        arr.splice(arr.length - 1, 1);
      }else{
        arr.push(newParseData.shift());
      }
    }
  }

  if(newParseData.length === 0) return true;
  else return false;
}


// console.log(matchWord('__END_DNE-----'));
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
// console.log(matchWord('for__if__rof__fi'));

module.exports = matchWord;
