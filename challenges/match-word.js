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
    let counter = 0;
    let tempChar = '';
    const newObj = {};
    let lowerStr = str.toLowerCase()
    for (let j = 0; j < lowerStr.length; j += 1) {
        if (lowerStr.charAt(j).match(/[a-z]/i)) {
            tempChar += lowerStr.charAt(j);
        } else if (tempChar.length > 0) {
            console.log(tempChar)
            newObj[counter] = tempChar;
            counter += 1;
            tempChar = '';
        }
        newObj[counter] = tempChar;
    }
        console.log(newObj)

    }

//realized too late I was checking for any palindrome
console.log(matchWord('for__if__rof__fi'))
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
module.exports = matchWord;
