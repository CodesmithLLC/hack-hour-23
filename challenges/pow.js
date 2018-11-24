/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */ 

// Note: use recursion to solve this problem.
// input: base ^ power -> two params with numeric values. So if it is 9 ^3 then 9 * 9 = 81 * 9 = 729
// output: returned value of base to the power!

// solve iteratively first.

function pow(base, power) {
  let sum = base; // base = 9 in invocation.
  //console.log(sum, "initial");
  for (let i = 1; i < power; i++) { 
    sum = base * sum;  // 81 = 9 * 9 = 81, 729 = 9 * 81. 
  }
  return sum
}

console.log(pow(9, 3)); // 729 expected output;

module.exports = pow;
