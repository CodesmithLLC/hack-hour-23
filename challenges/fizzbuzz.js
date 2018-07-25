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
  // create an empty array to hold values
  const result = [];
  // iterate from 1 until num and populate the array
  for (let i = 1; i <= num; i++) {
    // special cases:
    if (i % 3 === 0 && i % 5 === 0) { // put fizzbuzz in place of numbers divisible by 3 & 5
      result.push('fizzbuzz');
    } else if (i % 5 === 0) { // put buzz in place of numbers divisible by 5
      result.push('buzz');
    } else if (i % 3 === 0) { // put fizz in place of numbers divisible by 3
      result.push('fizz');
    } else {
      result.push(i);
    }
  }
  return result;
}

module.exports = fizzbuzz;
