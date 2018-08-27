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

function permPalin(str) {
  let count = {
    a:0,
    b:0,
    c:0,
    d:0,
    e:0,
    f:0,
    g:0,
    h:0,
    i:0,
    j:0,
    k:0,
    l:0,
    m:0,
    n:0,
    o:0,
    p:0,
    q:0,
    r:0,
    s:0,
    t:0,
    u:0,
    v:0,
    w:0,
    x:0,
    y:0,
    z:0
  };
  
  for (let i = 0; i < str.length; i++) {
    count[str[i]] = (count[str[i]] + 1)  % 2;
  }
  if (Object.values(count).indexOf('1') > -1) {
    return true;
  } else {
    return false;
  }
}

module.exports = permPalin;