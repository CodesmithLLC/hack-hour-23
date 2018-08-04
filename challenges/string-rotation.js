/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 */
console.log(stringRotation("hello", "hello")) //-> true
console.log(stringRotation("hello", "llohe")) //-> true
console.log(stringRotation("hello", "he")) //)-> false
console.log(stringRotation("hello", "ollhe")) //-> false (not a rotation, just an anagram)

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  if (s1.length !== s2.length) return false; //check if strs are same length, if not say false
  
  //function that will rotate the letters
  const rotateLetters = (str) => {
    let temp = [];
    temp.push(str[str.length-1]); //pushes the last letter first to start the rotattion
    //pushes the rest of the letters
    for (let i = 0; i < str.length - 1; i += 1){
      temp.push(str[i]);
    }
    return temp.join(''); 
    }

    //will rotate s2 one full cycle to determine if the strings are equal. If not, return false; 
    for (let i = 0; i < s1.length; i += 1){
      if (s1 === s2) return isSubstring(s1,s2)
      else s2 = rotateLetters(s2)
    }
    return false; 
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
