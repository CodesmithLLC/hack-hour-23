/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */
const palindromeChecker = (str) => {
  if (str.length <= 1) return true;
  const splitIntoArray = str.split('');
  if (splitIntoArray[0] === splitIntoArray[splitIntoArray.length - 1]) {
    splitIntoArray.shift();
    splitIntoArray.pop();
    return palindromeChecker(splitIntoArray.join(''));
  } else {
    return false;
  }
}

const createPermutations = (str) => {
  if (str.length === 2) return [str, str[1]+str[0]];

  const perms = [];
  str.split('').forEach((el, i, arr) => {
    const sub = arr.slice();
    sub.splice(i, 1);
    createPermutations(sub.join('')).forEach((perm) => {
      perms.push(el + perm);
    });
  });

  return perms;
};

const permPalin = (str) => {
  // guard cases
  if (str.length <= 1) return true;
  if (!str || typeof str !== 'string') return false;
  
  // create a permutations function that returns an array  of all permutations.
  const perms = createPermutations(str);
  // create a palindrome checking function, keep passing in every element of the perms array. 
  let i = 0;
  while (i < perms.length) {
    if (palindromeChecker(perms[i])) {
      return true;
    } else {
      i++;
    }
  }
  return false;
}

module.exports = permPalin;