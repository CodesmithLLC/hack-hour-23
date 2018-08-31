/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return undefined;
  if (!a || !b) return 0;
  const divisors = [];
  for (let i = 1; i <= Math.min(Math.abs(a), Math.abs(b)); i += 1) {
    if (Number.isInteger(a / i) && Number.isInteger(b / i)) {
      divisors.push(i);
    }
  }
  return Math.max(...divisors);
}

module.exports = gcd;