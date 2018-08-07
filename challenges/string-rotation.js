/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *                              0,1,2,3,4  0,1,2,3,4
 *                                         
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2, counter = 1) {
  if (s1 === s2) return true;
  if (s1.length !== s2.length) return false;
  if (s2.length === counter) return false 

  if (!isSubstring(s1, s2)) {
    let firstElementOfString2 = s2[0];
    let rotatedString2 = s2.slice(1) + firstElementOfString2;
    return stringRotation(s1, rotatedString2, counter+1)
  } else {
    return true
  }
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
