/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (
    !isFinite(base) ||
    !Number.isInteger(power) ||
    (base === 0 && power === 0) ||
    power < 0
  ) return "Please insert valid inputs into the pow function.";
  if (!power) return 1;
  return base * pow(base, power - 1);
}

module.exports = pow;
