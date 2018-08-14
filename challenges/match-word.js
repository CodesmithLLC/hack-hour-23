// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
// punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  // remove trailing characters from beginning and end of string
  //iterate through characters in the front and compare to characters at the end until end
    //if not matching by the end, return false
    //if matching by the end, return true

  const array = str.trim().toLowerCase().split('');
  let myString = '';
  let filter = /W/i;
  let length = array.length - 1;
  let x = 0;
  array.shift();

  while (x < length  && array.length !== 0) {
    console.log(array);
    if (array[x] === '!' || array[x] === '@' || array[x] === '#' || array[x] === '@' || array[x] === '$' || array[x] === '%' || array[x] === '%' || array[x] === '^' || array[x] === '&' || array[x] === '*' || array[x] === '(' || array[x] === ')' || array[x] === '-' || array[x] === '_' || array[x] === '+' || array[x] === '=') {
      array.shift();
    } else {
      break;
    }
    // x += 1;
  }

  while (array.length !== 0) {
    x = array.length - 1;
    if (array[x] === '!' || array[x] === '@' || array[x] === '#' || array[x] === '@' || array[x] === '$' || array[x] === '%' || array[x] === '%' || array[x] === '^' || array[x] === '&' || array[x] === '*' || array[x] === '(' || array[x] === ')' || array[x] === '-' || array[x] === '_' || array[x] === '+' || array[x] === '=') {
      array.pop();
    } else {
      break;
    }

    // x += 1;
  }

  x = 0;
  let end = array.length - 1;
  const array1 = [];
  for(let x = 0; x < array.length; x++){
    if (array[x] === '!' || array[x] === '@' || array[x] === '#' || array[x] === '@' || array[x] === '$' || array[x] === '%' || array[x] === '%' || array[x] === '^' || array[x] === '&' || array[x] === '*' || array[x] === '(' || array[x] === ')' || array[x] === '-' || array[x] === '_' || array[x] === '+' || array[x] === '=' ) {
      break;
    }
    array1.push(array[x]);
  }
  console.log(array1);
  const array2 = [];
  for(let x = array.length - 1; x >= 0; x -= 1){
    if (array[x] === '!' || array[x] === '@' || array[x] === '#' || array[x] === '@' || array[x] === '$' || array[x] === '%' || array[x] === '%' || array[x] === '^' || array[x] === '&' || array[x] === '*' || array[x] === '(' || array[x] === ')' || array[x] === '-' || array[x] === '_' || array[x] === '+' || array[x] === '=') {
      break;
    }
    array2.push(array[x]);
  }
  console.log(array2);
  console.log(array1);
  if (array1 !== array2) {
    return true;
  } else {
    return false;
  }

}
console.log(matchWord('IF()()fi[]'));
module.exports = matchWord;
