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


//success conditions: %3=0's and %5=0's are replaced by fizz and buzz, and &&'s by fizzbuzz
//i will iterate to i=<num, starting at i=1, testing each one by a condition for %3, %5, and both. I think i should do both first, then each individually.
//then I will push i to the array, unless it is divisible by either one.

function fizzbuzz(num) {
  return createFizzBuzzArrayAndReplace(num);
}

function createFizzBuzzArrayAndReplace(lastNum){
  const arr = [];
  for (let i=1; i <= lastNum; i++){
    arr.push(getAppropriateElement(i));
  }
  return arr;
}

function getAppropriateElement(num){
  if (divisibleByFiveAndThree(num)){
    return 'fizzbuzz'
  }else if (divisibleByThree(num)) {
    return 'fizz'
  }else if (divisibleByFive(num)){
    return 'buzz'
  }
  return num;
}

function divisibleByFiveAndThree(num){
  return num % 3 === 0 && num % 5 === 0
}

function divisibleByThree(num){
  return num % 3 === 0;
}

function divisibleByFive(num){
  return num % 5 === 0;
}

module.exports = fizzbuzz;
