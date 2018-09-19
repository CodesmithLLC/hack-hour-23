/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {

  let arr = [];
  let newString = string.concat(string).concat(string);
  let revString = newString.split('').reverse().join('');

  for (let i = 0; i < string.length; i +=1) {
    arr.push(newString.slice(i,i+3));
    arr.push(revString.slice(i,i+3));
  }

  return arr;
}


module.exports = anagrams;
