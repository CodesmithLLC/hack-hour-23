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
//what are the keywords?:
//while, if, for, end, tryfunction matchWord(str) {
function matchWord(str) {
    let stack = [];          //I'm going to use this to keep track of the opening and closing keywords
    let keywords = 'while if for end try yrt dne rof fi elihw';

    str = str.toLowerCase().replace(/[^a-z0-9]/gi, ' '); //make the string alphanumeric, all lowercase
    let temp = []
    for(let i of str.split(' ')){ if(i != '') temp.push(i); } //remove all empty strings
    str = temp;

    function reverseStr(str){ //it just reverses a string.
        let newStr = str;
        return newStr.split('').reverse().join('');
    }

    for(let i in str){
        if(keywords.includes(str[i])){                          //if its a keyword
            if(keywords.slice(21).includes(str[i])){              //if its a closing keyword
                if(stack[stack.length-1] == reverseStr(str[i])){    //if the top of the stack is matching keyword
                    stack.pop();                                    //then pop it off of the stack         
                } else { return false }        //if the keywords dont match, return false
            } else { stack.push(str[i]) }    //if its its an opening keyword, push it to the stack
        } else { return false }            //if its not a keyword at all, return false
    }
    return true; //if it makes it through without ever returning false, return true.
}


module.exports = matchWord;
