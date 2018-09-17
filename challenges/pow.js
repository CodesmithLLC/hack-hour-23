/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, total = base) {
  if (!power) return 0
  while(power > 1) {
    total = total * base
    return pow(base, power - 1, total)
  }
  return total
}

module.exports = pow;
