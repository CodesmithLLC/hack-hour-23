// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
                while try yrt for if fi rof elihw
                while for if fi rof try yrt elihw
// matchWord('');  -> true

function matchWord(str) {
    // remove all non characters in the given string
    // 
    // move to first character
    // store till first non-char in an array
    // 
    let stack = [];
    let current = "";
    let newStr = str.toLowerCase();

    function isChar(c) {
        if (c > 97 && c < 122) {return true}
        else {return false}; // doesnt work in javascript, must find some way to convert the char into an int so that the ascii comparison can be made
    }
    for (let i = 0; i < str.length; i++) {
        if (!isChar(str[i])) {
            i++;
        } else while (isChar(str[i])) {
            // grab first word, reverse, check if it exists in the stack, push if it does not exist, pop if it does exist.
        }
        // check to see if the stack is empty. if it is return true, else return false.
    }
}

module.exports = matchWord;
