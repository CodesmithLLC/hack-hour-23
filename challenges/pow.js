/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  // Base case
  if (power === 0) return 1;
  // Takes base and power abolute number so negatif number andling te negatif number
  return Math.abs(base) * pow(base, Math.abs(power) - 1);
}
module.exports = pow;
