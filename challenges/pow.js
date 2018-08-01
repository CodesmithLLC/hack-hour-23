/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, realBase = base) {
    //base case 
  if (power === 0) return 1;
  if (power === 1) return base;
  //return base
  if (power < 0) {
    return 1/(pow(base * realBase, Math.abs(power) - 1, realBase));
  }
  return pow(base * realBase, power - 1, realBase);
}
  

module.exports = pow;
