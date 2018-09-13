/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  // if the length of the string is not equal, if it doesn't have the same letters return false
  if(s1.length !== s2.length){
    return false;
  }else{
    // loop through both strings at the same time and check each letter
    // til you reach the end of the string, whatever index we didn't check pass those to the isSubString function
    let firstString = 0;
    let secondString = 0;

    let start1 = 0;
    let start2 = 0;
    while(secondString < s2.length){
      if(s1.charAt(start1) !== s2.charAt(start2)){
        secondString++;
      }else{
        if(start2 === 0){
          start2 = secondString;
        }
        firstString++;
        secondString++;
      }
    }
    start1 = firstString;
    return isSubstring(s1.slice(start1, s1.length), s2.slice(0, start2))
  }
}

console.log(stringRotation('hello', 'llohe'));

const h1 = 'hello';
const h2 = 'llohe';

console.log(isSubstring(h1.slice(2,5), h2.slice(0, 3)));

console.log(stringRotation('hello', 'hello'))

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
