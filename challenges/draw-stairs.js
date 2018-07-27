/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
	const final = '*'.repeat(n + 1);
	// console.log('final', final);

	if (n >= 1 && n <= 100) {
		for (let rung = '*'; rung !== final; rung += '*') {
			console.log(leftPad(' ', rung, n - rung.length));
		}
	} else {
		console.log('n needs to be between 1 and 100!');
	}
}

function leftPad(char, padStr, length) {
	for (let i = 0; i < length; i++) {
		padStr = char + padStr;
	}
	return padStr;
}

// drawStairs(6);

module.exports = drawStairs;
