/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  //check which one is bigger
  let smaller;
  let bigger;
  if (a > b) {
    smaller = b;
    bigger = a;
  } else {
    bigger = b;
    smaller = a;
  }
  if (bigger % smaller === 0) {
    console.log(bigger, smaller)
    return smaller;
  }
  for (let i = Math.floor(smaller / 2); i >= 1; i--) {
    console.log('i', i);
    if (bigger % i === 0 && smaller % i === 0) {
      return i;
    }
  }
  
}
console.log(gcd(10, 8));

module.exports = gcd;