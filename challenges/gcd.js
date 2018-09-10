/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const minValue = Math.min(a, b);
  let returnValue = 1;
  
  for(let i = 2; i < minValue + 1; i++) {
    if(a % i === 0 && b % i === 0) {
      returnValue = i;
    }
  }
  return returnValue;
}

// recursive solution
function gcd(a, b) {
  if(b === 0) return a;

  return gcd(b, a % b);
}

module.exports = gcd;
