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

function anagrams(input, curr = 0, results = []) {
  // if (!Array.isArray(input)) {
  //   input = input.split('')
  // }
  // console.log(input)
  // if (input.length >= 4) {
  //   curr = input.shift()
  //   const result = anagrams(input, curr, results)
  // } else {
    
  // }
  // console.log(curr)
  // console.log(input)
}

console.log(anagrams('abc'))

module.exports = anagrams;
