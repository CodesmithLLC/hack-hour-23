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
 /*this is very fancy way to solve problems
 var result = inputArray.reduce(function permute(res, item, key, arr) {
  return res.concat(arr.length > 1 && arr.slice(0, key).concat(arr.slice(key + 1)).reduce(permute, []).map(function(perm) { return [item].concat(perm); }) || item);
}, []);
*/
function anagrams(string) {
  string = string.split('');
  for(let i = 0; i < string.length; i++) {
    console.log(string[i])
  }

}
anagrams('abc')
module.exports = anagrams;
