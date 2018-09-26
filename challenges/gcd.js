/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const sorted = [a,b].sort((a,b) => a - b);
  let current = a;

  while (a%current !== 0 || b%current !== 0) {
    current -= 1
  }
  return current;
}

module.exports = gcd;