// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5,
// and "fizzbuzz" in place of numbers divisble by both 3 and 5
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
  const fizzArr = [];
  const newArr = [];

  for (let i = 1; i < num + 1; i += 1) {
    fizzArr.push(i);
  }
  fizzArr.forEach((ele) => {
    if (ele % 3 === 0 && ele % 5 === 0) {
      newArr.push('fizzbuzz');
    } else if (ele % 3 === 0) {
      newArr.push('fizz');
    } else if (ele % 5 === 0) {
      newArr.push('buzz');
    } else {
      console.log(ele);
      newArr.push(ele);
    }
  });
  return newArr;
const fizzArr = [];
  const newArr = [];

  for (let i = 1; i < num + 1; i += 1) {
    fizzArr.push(i);
  }
  fizzArr.forEach((ele) => {
    if (ele % 3 === 0 && ele % 5 === 0) {
      newArr.push('fizzbuzz');
    } else if (ele % 3 === 0) {
      newArr.push('fizz');
    } else if (ele % 5 === 0) {
      newArr.push('buzz');
    } else {
      console.log(ele);
      newArr.push(ele);
    }
  });
  return newArr;

  // create array containing all numbers

  // create a new empty array
  // check if number divisible by 3 and 5 if it is replace with 'fixxbuzz'
  // check if number is divisible by 3 put fizz in new array
  // check if number divisble by 5 put buzz
  // return new array
}
console.log(fizzbuzz(16));
module.exports = fizzbuzz;
