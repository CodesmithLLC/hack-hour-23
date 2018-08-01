/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    var result = 1;
    while(power--) {
      result *= base;
    }
    return result;
  }

module.exports = pow;
