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

function anagrams(str, index = 0, resultArray = []) {
  if (!str || index >= str.length) return resultArray;
  else if (typeof str === 'string') str = str.split("");
    
  for (let i = index; i < str.length; i++)
    resultArray.push(ToggleLetters(str, index, i));

  return anagrams(str, index + 1, resultArray);
}

function ToggleLetters(str, index1, index2) {
  if (index1 != index2) {
    let temp = str[index1];
    str[index1] = str[index2];
    str[index2] = temp;
  }
  return str.join("");
}

console.log(anagrams('abc'));

module.exports = anagrams;
