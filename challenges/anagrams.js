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
  // guard cases
  if (!string) return [];
  if (typeof string !== 'number') return [];
  if (string.length === 1) return [string];
  if (string.length === 2) return [string, string[1] + string[0]];

  // use a helper function to create permutations
  // output is an array
}

const permutations = (str, i = 0, arr = []) => {
  // base case
  if (i === str.length - 1) return arr;

  const splitStringIntoArray = str.split('');
  const currentLetter = splitStringIntoArray[i];

  // push first string that you're working with into the array
  arr.push(str);

  // remove letter from array
  splitStringIntoArray.splice(i, 1);
  // reverse it
  splitStringIntoArray.reverse();

  // add the letter to the word
  while (arr[arr.length - 1] !== currentLetter + splitStringIntoArray.join('')) {
    arr.push(currentLetter + splitStringIntoArray.join(''));
    splitStringIntoArray.push(splitStringIntoArray.shift());
  }
  return permutations(str, i += 1, arr);
};

module.exports = anagrams;
