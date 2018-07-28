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
	let ret = [];
	for (let i = 1; i <= num; i++) {
		if ((i % 3 === 0) && (i % 5 === 0)){
			ret.push('fizzbuzz');
		} else if (i % 3 === 0) {
			ret.push('fizz');
		} else if (i % 5 === 0) {
			ret.push('buzz');
		} else {
			ret.push(i);
		}
	}
	return ret;
}

function fizzbuzz(num) {
	let ret = new Array(num);
	for (let i = 0; i < num; i++){
	    if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {ret[i] = 'fizzbuzz'}
		else if ((i + 1) % 5 === 0) {ret[i] = 'buzz'}
		else if ((i + 1) % 3 === 0) {ret[i] = 'fizz'}
    	else {ret[i] = i + 1};
	}
	return ret;
}



module.exports = fizzbuzz;
