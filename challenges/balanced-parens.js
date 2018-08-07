/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */



 //get the first open bracket type
 //index of ( and [  and {, min
 
 //get the first closed bracket type
 //index of ),},], min

 //get the second open bracket type,
 //if exists,
 //verify that second open bracket is < closed bracket index

 //if so, remove the first open/close pair, store them
 //repeat;

function balancedParens(input){



  let remaining = input.split('');

  let parens = [];
  let brakcets = [];
  let braces = [];



    let openParIndex = 0;
    let closeParIndex = 0;

    let openBracketIndex = remaining.indexOf('[');
    let closeBracketIndex = remaining.indexOf(']');

    let openBracesIndex = remaining.indexOf('{');
    let closeBrancesIndex = remaining.indexOf('}');
 

  let sliceIndex = 0;


  
  //parens
  while(openParIndex >= 0 && closeParIndex >= 0 && remaining.length){

    let openParIndex = indexOfOpen(remaining);
    let closeParIndex = indexOfClose(remaining,remaining[openParIndex]);

    //get next one

    let nextOpenIndex = indexOfOpen(remaining,openParIndex+1);
    let nextCloseIndex = indexOfClose(remaining,remaining[nextOpenIndex]);
    if(nextCloseIndex>closeParIndex) return false;

    if(openParIndex < 0 || closeParIndex <0){
      return false;
    }

    //verify openidx < close idx
    if (closeParIndex < openParIndex) return false;

    //push both to parensarray
    parens.push(remaining[openParIndex]);
    parens.push(remaining[closeParIndex]);

    //remove both indices
    remaining.splice(openParIndex,1);
    remaining.splice(closeParIndex-1,1);
  }
 

  if(parens.length % 2 ===0) return true;

}


function indexOfOpen(array, start =0){
  let indices = [];

  let bracket = array.indexOf('[',start);
  let brace = array.indexOf('{',start);
  let parens = array.indexOf('(',start);

  indices.push(bracket,brace,parens);
  indices = indices.filter(item => item >= 0);

  return Math.min(...indices);
}

function indexOfClose(array,type){

  let closeType;
  switch(type){
    case '(': closeType = ')'; break;
    case '[': closeType = ']'; break;
    case '{': closeType = '}'; break;
  }
  return array.indexOf(closeType);

}

console.log(balancedParens('[(]){}'));

module.exports = balancedParens;
