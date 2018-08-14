/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
	if (power === 0 && base === 0) return NaN;
	if (power === 0) return 1;
	if (power === 1) return base;
	if (power === -1) return 1 / base;
	if (power < 0) return pow(base, power + 1) / base;
	else return base * pow(base, power - 1);
}

// console.log(pow(4, -2));

module.exports = pow;
