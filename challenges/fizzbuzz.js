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

// input: an array of numbers.
// guard case check if input is a number type.
// output: use conditional logic to check if the element is divisible by 3, 5, or 3 & 5, or none and output the following...via ternary operator.
// output the string -> 3("fizz") or 5("buzz") or 3 & 5("fizzbuzz") else just the number.
// tools: for loop to iterate through the number 1 to the end.
// readibility: using ternary operator is shorter but less readable to developers.

const fizzbuzz = (num) => {
  if (typeof num !== 'number') { return 'false'; }
  if (num <= 0) { return 'false'; }
  const arr = [];
  for (let i = 1; i <= num; i++) {
    const f = i % 3 === 0;
    const b = i % 5 === 0;
    // if divisible by 3 & 5 fizzbuzz else fizz
    arr.push(f ? b ? 'fizzbuzz' : 'fizz' : b ? 'buzz' : i);
  }
  return arr;
};

// input: num parameter representing a number.
// output: return an array filled with numbers 1 to num param,
// However "fizz" is in place of numbers div by 3 and "buzz" in place of num div by 5 and "fizzbuzz" in place of num div by 3 and 5.
// tools: conditional logic if/else statements, cover the 3 & 5 condition first and then 3 and 5 separately afterwards. Arrayto add the values to the array.


// ES5 solution.

// function fizzbuzz(num) {
//   const array = [];
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       array.push("fizzbuzz");
//     } else if (i % 3 === 0) {
//       array.push("fizz");
//     } else if (i % 5 === 0) {
//       array.push("buzz");
//     } else {
//       array.push(i);
//     }
//   }
//   return array;
// }


console.log(fizzbuzz(16)); // result as stated above in instructions.
console.log(fizzbuzz('16')); // false.
console.log(fizzbuzz(-5)); // false.
console.log(fizzbuzz(30)); // 15 and 30 will be fizzbuzz

module.exports = fizzbuzz;
