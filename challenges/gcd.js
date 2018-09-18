/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
 
 let lowest;
 let highest;
 if (a < b) {
   lowest = a;
   highest = b;
 } else {
   lowest = b;
   highest = a;
 };
  if (b % a === 0) {
    return a;
  } else {
    return gcd(a - 1, b);
  }
}

module.exports = gcd;