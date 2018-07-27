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
    let array = [];
    for (let i = 1; i <= num; i++) {
      array.push(i);
    }
    return array.map(number => {
      if (number % 3 === 0 && number % 5 === 0) {
        return 'fizzbuzz';
      } else if (number % 3 === 0) {
        return 'fizz';
      } else if (number % 5 === 0) {
        return 'buzz'
      } else {
        return number;
      }
    })
  }

module.exports = fizzbuzz;
