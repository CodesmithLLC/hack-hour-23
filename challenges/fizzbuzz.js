// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
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

function fizzbuzz(num) {
	return Array(num).fill().map((e, i)=> i + 1).map( num => {
		if (num % 3 === 0 && num  % 5 === 0) return "fizzbuzz";
		if (num % 3 === 0) return "buzz";
		if (num % 5 === 0) return "fizz";
		return num;
	} )
}

module.exports = fizzbuzz;
