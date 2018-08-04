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
  console.log(`s1 is ${s1} s2 is ${s2}`);
  if (s1 === s2) return true;
  if (s1.length !== s2.length) {
    console.log(`s1.length is ${s1.length} s2.length is ${s2.length}`);
    return false;
  }
  let loopLength = s2.length;
  let matchIndex = s2.indexOf(s1[0]);
  const str2 = s2.split('');
  for (let i = 0; i < loopLength - matchIndex; i++) {
    let temp = str2.pop();
    str2.unshift(temp);
  }
  return isSubstring(s1, str2.join(''));
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
