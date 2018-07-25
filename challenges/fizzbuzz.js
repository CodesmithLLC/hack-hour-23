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

//input: num parameter representing a number.  
//output: return an array filled with numbers 1 to num param, 
//However "fizz" is in place of numbers div by 3 and "buzz" in place of num div by 5 and "fizzbuzz" in place of num div by 3 and 5.
//   
//tools: conditional logic if/else statements, cover the 3 & 5 condition first and then 3 and 5 separately afterwards. Arrayto add the values to the array.

function fizzbuzz(num) {
  const array = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push("fizzbuzz");   
    } else if (i % 3 === 0) {
      array.push("fizz");
    } else if (i % 5 === 0) {
      array.push("buzz");
    } else {
      array.push(i);
    }
  }
  return array;
}


console.log(fizzbuzz(16));

module.exports = fizzbuzz;
