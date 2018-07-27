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
//return array containing 1-numbers
  let fizzbizzy = [];
//loop through 1-num numbers
  for (let i = 1; i <= num; i++){
//put 'fizz' for #s divisible by{
    if (i % 5 == 0 && i % 3 == 0) {
        fizzbizzy.push('fizzbuzz');
    } else if (i % 3 == 0) {
      fizzbizzy.push('fizz');
    } else if (i % 5 == 0) {
      fizzbizzy.push('buzz');
    } else {
      fizzbizzy.push(i);
    }
  }
  return fizzbizzy;
}
fizzbuzz(16);

module.exports = fizzbuzz;
