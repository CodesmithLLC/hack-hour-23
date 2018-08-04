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
  // use only one call to isSubstring
  
  const firstLetterIndex = s2.indexOf(s1[0]);
  let newStr = "";
  
  for (let i = firstLetterIndex; i < s2.length; i++) {
     newStr += s2[i];
  }

  // First check
  if ((isSubstring (s1, newStr)) && s1.length === newStr.length) {
    return true;
  }

  for (let i = 0; i < firstLetterIndex; i++) {
    newStr += s2[i];
  }

  // Second check
  if ((isSubstring (s1, newStr)) && s1.length === newStr.length) {
    return true;
  } else {
    return false;
  }
  
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

//console.log(stringRotation("hello", "hello"));