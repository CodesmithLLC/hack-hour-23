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
  if (str.length === 0) return true;

  str = str.replace(/[^a-zA-Z ]+/g, ' ');
  const stack = [];
  let tempWord = '';
  let i = 0, j = 0, k = 0;

  while (i < str.length) {

    if (str[i] !== ' ') {
      while (str[i] !== ' ' && i < str.length) {
        tempWord += str[i];
        i++;
      }
      stack.push(tempWord.toLowerCase());
    }

    if (tempWord !== '') {
      tempWord = '';
    }
    else {
      i++;
    }
  } //stack will contain an array of each word
  console.log(stack);

  if (stack.length % 2 === 1) return false; //eliminate odds immediately

  k = stack.length - 1;
  let m, n;
  while (j < k) {
    if (stack[j].length !== stack[k].length) return false;
    else {
      m = 0;
      n = stack[k].length - 1;
      while (n >= 0) {
        if (stack[j][m] !== stack[k][n]) return false;
        m++; n--;
      }
    }
    j++; k--;
  }
  return true;
}

// console.log(matchWord('123 ABD  dba')); // -> true;
// console.log(matchWord('__END_DNE-----')); // -> true
// console.log(matchWord('__ENDDNE__')); //  -> false       (not separated by a space)
// console.log(matchWord('IF()()fi[]')); //  -> true        (should be case-insensitive)
// console.log(matchWord('for__if__rof__fi')); //  -> false     not properly closed. like ( [) ] 
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')); // -> true
console.log(matchWord('')); //  -> true

module.exports = matchWord;
