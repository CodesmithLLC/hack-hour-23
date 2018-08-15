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
    let newStr = str.replace(/\W+|_/gm,' ').toLowerCase().trim().split('');

    let stack = [];
    for (let i = 0; i < newStr.length; i++) {
        console.log(newStr)
        console.log(stack)
        
        if (newStr[i] === ' ' && newStr[i+1] === stack[i]){
            stack.push(newstr[i])
            stack.pop();
            stack.pop();
        } else if ( newStr[i] === stack[i]) {
            stack[i].pop();
        } else {
            stack.push(newStr[i])
        }

    }

    console.log(stack)

}

console.log(matchWord('__END_DNE-----'))


//PLAN
    // regex to remove all characters that aren't A-Z
    // coerce all to lower case
    // transform all spaces...
    // take first word split and reverse it 
        // do similar matching as was done in the parens match (pop on and off a stack)
        // if you split and there is only one word - instant false.
        //


module.exports = matchWord;
