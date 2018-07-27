// Write a function that returns an array containing
// the numbers 1 to NUM. Put "fizz" in place of numbers 
// divisble by 3, "buzz" in place of numbers divisble by 5, 
//and "fizzbuzz" in place of numbers divisble by both 3 and 5


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

// Input: a numerical value
// Output: an array - the array will cotain indexes for each number from 1 to the number paramater - except for the exceptions above

function fizzbuzz(num) {
  const output = [];
  for (var i = 1; i < num + 1; i++) {
    output.push((i%3)?(i%5)?i:'Buzz':(i%5)?'Fizz':'FizzBuzz');
  }
  return output
}

module.exports = fizzbuzz;
