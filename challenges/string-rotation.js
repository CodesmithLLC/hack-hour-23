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
  for (let i = 1; i < s2.length; i++) {
    if (!isSubstring(s1, s2.substring(0, i + 1))) {
      s1 = s1.replace(s2.substring(0, i), "");
      s2 = s2.replace(s2.substring(0, i), "");
      break;
    }
  }
  return isSubstring(s1, s2)
}
let str1 = "hello"
let str2 = "elhlo"


module.exports = { isSubstring: isSubstring, stringRotation: stringRotation };
