/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  // edge cases
  if (a === null || b === null) return undefined;
  if (a === 0 || b === 0) return undefined;

  // check if a/b are divisible by one another
  if (a % b === 0) return b;
  if (b % a === 0) return a;

  // find half of the smaller of a and b
  let half;
  if (a < b) half = a / 2;
  else if (b < a) half = b / 2;

  // iterate from half down to 0 to find gcd
  for (let i = half; i > 1; i -= 1)
  {
    if (a % i === 0 && b % i === 0) return i;
  }

  return 1;
}

console.log(gcd(10, 5)); // -> 2
console.log(gcd(10, 9)); // -> 1

module.exports = gcd;