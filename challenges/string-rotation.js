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
if (s1.length !== s2.length) return false;
  const s1Arr = []
  const s2Arr = []
  let temp;
  let check1;
  let check2;

  for (let i = 0; i < s1.length; i += 1) {
    s1Arr.push(s1[i])
  }
  for (let i = 0; i < s2.length; i += 1) {
    s2Arr.push(s2[i])
  }

  for (let i = 0; i < s1Arr.length; i += 1) {
    check1 = s1Arr.toString();
    check2 = s2Arr.toString();
    if (check1 === check2) return true
    s2Arr.push(s2Arr[0])
    s2Arr.shift();    
  }
return false;
}
// function check(a, b) {
//   if (a === b) return true;
//   return false
// }
let arr1 = [ 'h', 'e', 'l', 'l', 'o' ]
let arr2 = [ 'l', 'l', 'o', 'e', 'h' ]
let string1 = "hello"
let string2 = "hello"

console.log(stringRotation(string1, string2))
// console.log(check(string1, string2))
module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
