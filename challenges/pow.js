/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */ 

// Note: use recursion to solve this problem.
// input: base ^ power -> two params with numeric values. So if it is 9 ^3 then 9 * 9 = 81 * 9 = 729
// output: returned value of base to the power!

// solve iteratively first.

// function pow(base, power) { 
//   let sum = base; // base = 9 in invocation. Reference for sum val at at each iteration of the for loop.
//   //console.log(sum, "initial");
//   for (let i = 1; i < power; i++) { 
//     sum = base * sum;  // 81 = 9 * 9 = 81, 729 = 9 * 81. 
//   }
//   return sum
// }

// recursive solution.
// set up termination and base case situations.
// if base or power is zero then exit the function.
// 
// 9 * (pow(9, 3 - 1)) -> 9 * 9 = 81 
// 9 * (pow(9, 2 - 1)) -> 9 * 81 = 729... then base case is met, recursion ends.

// function pow(base, power) {
//   // termination/fail case
//   if (base < 0 || power < 0) return;
//   // base case
//   if (power === 0) return 1;
//   return base * (pow(base, power - 1));
// }
 

// recursive that is log(n) time complexity.
// much more efficient!

function pow(base, power) {
  //fail clause
  if (base < 0 || power < 0) return;
  // base case
  if (power === 0) return 1;
  // logic to deal with power if even or odd.
  if (power % 2 === 0) {
    const product = pow(base, power / 2);
    return product * product;
  } else {
    const product = pow(base, (power - 1) / 2);
    return product * product * base;
  }
}

console.log(pow(0, 3)); // 0
console.log(pow(9, 0)); // 1
console.log(pow(0, 0)); //
console.log(pow(9, 3)); // 729 expected output;

module.exports = pow;
