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
  //find the index of s1 first char within s2, slice s2 up to that point and pass it to substring
  return s1 === s2 ? true : isSubstring(s1, s2.split('').slice(0, s2.indexOf(s1[0])).join(''));


}

stringRotation("hello", "llohe");
stringRotation("hello", "ollhe");
module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
