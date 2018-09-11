/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

//my original solution
// function gcd(a, b) {
//   //edge cases. Make sure parameters are numbers, and check if they are equal
//   if (typeof a !== 'number' || typeof b !== 'number') return 'please input numbers'
//   if (a === b) return a

//   //make sure a is larger than b
//   if (b > a) {
//     const temp = a; 
//     a = b;
//     b = temp; 
//   }

//   //loop through a, starting at a/2. Since a is larger than b, 
//   //the first common divisor possibility would be a/2
//   for (let i = a/2; i > 0; i--){
//     if (a % i === 0 && b % i === 0) return i
//   }
//   return 1
// }

function gcd(a, b){
  if (b === 0) return a;
  return gcd(b, a % b);
}

//other solution
// function gcd(a,b){
//   while (a > 0 && b > 0){
//     if (a < b) b = b - a;
//     else a = a - b; 
//   }
//   return a || b; 
// }


console.log(gcd(6, 18))




module.exports = gcd;