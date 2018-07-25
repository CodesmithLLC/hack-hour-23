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
   if (num % 3 === 0) {
      if (num % 5 === 0)
         console.log("fizzbuzz");
      else
         console.log("fizz");
   }
   else if (num % 5 === 0)
      console.log("buzz");
   else {
      console.log(num);
   }
}

fizzbuzz(1);
fizzbuzz(3);
fizzbuzz(5);
fizzbuzz(15);

//module.exports = fizzbuzz;
