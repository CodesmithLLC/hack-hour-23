/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  for (let d = Math.floor(Math.max(a,b) / 2); d > 0; d-- )
    if (a % d === 0 && b % d === 0) return d;
}

module.exports = gcd;