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
  //Declare output array
  const output = [];

  //run a for loop from 1 to num
  for (var i = 1; i < num + 1; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      output.push('fizzbuzz');
    } else if (i % 3 === 0) {
      output.push('fizz');
    } else if (i % 5 === 0) {
      output.push('buzz');
    } else {
      output.push(i);
    }
  }
  
  //return output array
  return output
}

module.exports = fizzbuzz;
