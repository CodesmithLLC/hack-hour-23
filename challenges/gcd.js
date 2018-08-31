/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

 const euclid = (a, b) => {
  if (a - b === 0) return b;
  const subtract = a - b;
  if (subtract < b) {
    return euclid(b, subtract);
  }
  return euclid(subtract, b);
}

function gcd(a, b) {
// guard cases
  if (!a || !b) return 0;
  if (!a && !b) return 0;
  if (typeof a !== 'number' && typeof b !== 'number') return 0;
  if (a < b) return 'first argument must be greater than the second';

  return euclid(a, b);
}

module.exports = gcd;