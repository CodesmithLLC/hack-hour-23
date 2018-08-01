/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (power < 0) {
    if (power === 0) return 1;
    if (base >= 1) base = 1 / base;
    return base * pow(base, power + 1);
  }
  if (power === 0) return 1;
  return base * pow(base, power - 1);
}
console.log(pow(4, -3));
