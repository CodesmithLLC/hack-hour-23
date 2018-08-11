/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
	const lut = {
		1: 'I',
		5: 'V',
		10: 'X',
		50: 'L',
		100: 'C',
		500: 'D',
		1000: 'M'
	};

	let result = '';

	// if (n > 1000) {
	// 	const mCount = Math.floor(n / 1000);
	// 	const mRemainder = n % 1000;
	// }
	const solve = n => {
		// console.log('lut', lut[n]);
		// base case: if number is in our lookup table, simply return that number
		if (n in lut) {
			result = lut[n];
			return lut[n];
		}
		// recursive case: start from greatest denominator and work our way down
		if (n > 1000) {
			const mCount = Math.floor(n / 1000);
			const mRemainder = n % 1000;
			result += 'M'.repeat(mCount);
			solve(mRemainder);
		} else if (n > 500 && n < 1000) {
		} else if (n > 100 && n < 500) {
		} else if (n > 50 && n < 100) {
		} else if (n > 10 && n < 50) {
		} else if (n > 5 && n < 10) {
		} else if (n > 1 && n < 5) {
		}
	};

	solve(n);
	console.log('result', result);

	return result;
}

romanNumeral(1000);

module.exports = romanNumeral;
