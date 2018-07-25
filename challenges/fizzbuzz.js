// Write a function that returns an array containing the numbers 1 to NUM.
// Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers
// divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]
// input num
// output array, fizz for 3, buzz for 5, fizzbuzz for 3/5
function fizzbuzz(num) {
	const result = [];
	// loop through 1 to num
	for (let i = 1; i <= num; i++) {
		// if index is divisible by 5 & 3, push 'fizzbuzz' into result arr
		if (i % 5 === 0 && i % 3 === 0) {
			result.push('fizzbuzz');
		}
		// else if index is divisible by 5, push 'buzz' into result arr
		else if (i % 5 === 0) {
			result.push('buzz');
		}
		// else if index is divisible by 3, push 'fizz' into result arr
		else if (i % 3 === 0) {
			result.push('fizz');
		}
		// else push index into result arr
		else {
			result.push(i);
		}
	}
	return result;
}

console.log(fizzbuzz(16));

module.exports = fizzbuzz;
