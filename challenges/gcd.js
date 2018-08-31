/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  // Guard clause check
  if ((typeof(a) !== "number") || (typeof(b) !== "number")) {
    return 0;
  }

  if(a === b) {
    return a;
  }

  let max = Math.max(a, b);

  for (let i = max-1; i >= 1; i--){
    if((a % i === 0) && (b % i === 0)) {
      return i;
    }
  }
}

console.log(gcd(10, 9));

module.exports = gcd;