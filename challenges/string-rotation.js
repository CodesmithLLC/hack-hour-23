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
//two indicies, i1, i2, first one starts at the first leftter of s1.
let s1Index = 0;

//i2 starts at the last letter of s2.
let s2Index = s2.length-1;
let match = false;
let beginningOfRotation = 0;

//we compare the char at i1 to the char at i2, decrementing i2 until it matches a letter.
let firstMatch = true;
while(s1Index < s1.length && s2Index < s2.length){
  let s1Char = s1[s1Index];
  let s2Char = s2[s2Index];
  while(s1Char !== s2Char && s2Index>=0 && firstMatch){
    s2Index--;
    s2Char = s2[s2Index];
  }

  if(!firstMatch){
    if(s1Char !== s2Char){
      return false;
    }
  }
  if(s1Char === s2Char && firstMatch){
    firstMatch = false;
    //if it does find a match before reaching <0, save this value as beginning of rotation.
    beginningOfRotation = s2Index;

  //if it doesnt find a match at all, return false.
  }else if(s2Index<0) return false;
  s1Index++;
  s2Index++;
}


// increment i1. increment i2 (if in range)

//make a new comparison with i1 and i2, repeating process until EOS.
//if any comparison fails, return false
//if gotten this far, slice out from the beginning of s2 to the beg of rotation save.
const remainder = s2.slice(0,beginningOfRotation);

//check if that slice issubstring of s1.
return isSubstring(s1,remainder);
//if so, it's a rotation!


}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
