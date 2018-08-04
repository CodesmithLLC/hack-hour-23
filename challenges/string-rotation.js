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
   if (s1.length !== s2.length) return false;   //checks if strings are same length
   let temp = '';

   for (let i = 0; i < s1.length; i++) {
      for (let j = 0; j < s2.length; j++) {
         if (s1[i] === s2[j]) {
            temp = s2.substring(j, s2.length) + s2.substring(0, j);
            if (isSubstring(s1, temp)) return true;
         }
      }
   }
   return false;
}

console.log(stringRotation("hello", "hello"))
console.log(stringRotation("hello", "llohe"))
console.log(stringRotation("hello", "he"))
console.log(stringRotation("hello", "ollhe"))



module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
