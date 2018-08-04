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
   let inner = (str1, str2, count) => {
    if(str1[0] === str2[0] || count > str1.length) {
      return isSubstring(str1, str2);
    } else {
      let r1 = "";
      for(let i = 1; i < str2.length; i++) {
        r1 += str2[i];
      }
      r1 += str2[0];
      return inner(str1, r1, ++count);
    }
   }
   return inner(s1, s2, 0);
 }

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
