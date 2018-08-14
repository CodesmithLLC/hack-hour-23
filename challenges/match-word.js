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
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //iterate through string until a letter found
  let horribleCode = str.split('');
  let index = 0;
  let currentLetter = horribleCode[index].toUpperCase();

  let stack = [];

  while(index < horribleCode.length){

    while (alphabet.indexOf(currentLetter) < 0 && index < horribleCode.length) {
      index++;
      currentLetter = horribleCode[index].toUpperCase();
    }
    //once a letter is found, push it on to an array and keep going until a non letter is found
    let word = [];
    word.push(currentLetter);
    index++;
    currentLetter = horribleCode[index].toUpperCase();

    while(alphabet.indexOf(currentLetter) >= 0 && index < horribleCode.length) {
      word.push(currentLetter);
      index++;
      if(index<horribleCode.length) currentLetter = horribleCode[index].toUpperCase();     
    }

    if(word.length){

      // then push it on to a stack
      if(stack.length){
        if(stack[stack.length-1].join('') == word.reverse().join('')) stack.pop();
        else stack.push(word.reverse());
      }else{
        stack.push(word);
      }
    }
  }
  
  if (stack.length)return false;
  return true;
}



module.exports = matchWord;
