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

const anagrams = (string, start) => {
  if (string.length === 0) return [];
  if (string.length === 1) return [ string + start ];
  //recurse through array to produce possibilities
  const result = [];
  //loop through string, set innerResult to be the result of calling anagram,
  for (let i = 0; i < string.length; i += 1) {
    //passing in the substring from beginning to current letter concated with substring 
    //starting at next letter until the end of string, and current letter of string at i as start
    let innerResult = anagrams(string.substring(0, i) + string.substring(i + 1), string[i])
    //loop through innerResult length, result.push(start + innerResult[j])
    console.log('innerRes', innerResult);
    for (let j = 0; j < innerResult.length; j += 1) {
      console.log('start', start)
      result.push(start + innerResult[j]);
    }
  }

  return result;
  
}

console.log(anagrams('abc'));
module.exports = anagrams;
