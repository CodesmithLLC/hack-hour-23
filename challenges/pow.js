/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, result = 1) {
    // base cases
    if (power < 0) {
       return base;
    }
    
    if (power === 0) {
        return result;
    }
    result = result * base;
    return pow(base, power - 1, result);
}

module.exports = pow;
