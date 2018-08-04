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
  //loop through string s1 length
    //take out the first letter from s1 and append it to the end of s1
    //compare s1 to s2
    //return true if s1===s2
  let length = s1.length;
  let temp;
  let tempString = s1;
    while(length > 0){
    temp = tempString.slice(0,1);
    tempString = tempString.slice(1) + temp;
    if(tempString === s2){
      return true;
    }
    length--;
  }
  return false;

}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
