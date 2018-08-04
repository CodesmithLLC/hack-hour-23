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

function stringRotation(s1, s2, counter = 1) {
  // make sure that the second string has the same length as the first string 
  if (s1.length !== s2.length) return false;

  // return false if counter === length of string, means all string rotation possibilities have been checked
  if (s2.length === counter) return false 

  // check to see if call to isSubstring returns true/false with current s2 input
  if (!isSubstring(s1, s2)) {
    // rotate the string, pass it in your recursive call
    let firstElementOfString2 = s2[0];
    let rotatedString2 = s2.slice(1) + firstElementOfString2;
    return stringRotation(s1, rotatedString2, counter+1)
  } else {
    // return true, string 2 is a rotation of string 1
    return true
  }

}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
