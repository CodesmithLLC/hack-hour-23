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

  // === ** SOLUTION 1 ** ==== 
  // let arr = [];
  // let newString = string.concat(string).concat(string);
  // let revString = newString.split('').reverse().join('');

  // for (let i = 0; i < string.length; i += 1) {
  //   arr.push(newString.slice(i,i+string.length));
  //   arr.push(revString.slice(i,i+string.length));
  // }

  // return arr;

  // === ** SOLUTION 2 ** ===
  // For each character going to get the remainder and then recurse the remainder

  // Create a store for permutations
  const perms = [];

  //define a base case that returns an empty stirng
  if (string.length) return [''];

  // iterate over the characters 
  string.split('').forEach((char, i) => {
    //splice out the current char and get remainder 
    const remainder = string.slice(0,1) + string.slice(i + 1);

    //make a recursive call on the remainder
    const subPerms = anagrams(remainder)

    // for each permutation concat the current char
    subPerms.forEach(subPerm => {
      perms.push(subPerm + char)
    })
  })

  //remove the duplicates
  return [ ... new Set(perms)]



}


module.exports = anagrams;
