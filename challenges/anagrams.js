/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  */
  var result = anagrams('abcd');
  console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  
// my solution during hack hour
// function anagrams(string) {

//   // split string so can iterate
//   string = string.split('')

//   const helper = str => {
//     let parent = []
//     // string is over two letters, break it down by one letter, and find all the options below
//     if (str.length > 2) {
//       for (let i = 0; i < str.length; i += 1){
//           let child = helper(str.slice(1))
//           for (let j = 0; j < child.length; j += 1){
//             parent.push(str[0] + child[j])
//           }
//           // rotate string, so first letter goes to end and first letter gets removed. 
//           str.push(str[0])
//           str.shift()
//       } 
//     } 
//     // string only has two letters, return the two possibilites 
//     else {
//       parent.push(str[0] + str[1])
//       parent.push(str[1] + str[0])
//     }
//     return parent; 
//   }
//   let answer = helper(string)
//   return answer;
// }

// Codemsith solution
function anagrams(str) {
  // create a store for permutations
  const perms = [];

  // define base case, return an empty str
  if (!str.length) return [''];

  // iterate the chars
  str.split('').forEach((char, i) => {
    // splice out the current char and get remainder
    const remainder = str.slice(0, i) + str.slice(i + 1);

    // make a recursive call on the remainder
    const subPerms = anagrams(remainder);

    // for each sub permutation, concat the current char
    subPerms.forEach((subPerm) => perms.push(subPerm + char));
  });

  // remove the duplicates
  return new Set(perms);
}

module.exports = anagrams;
