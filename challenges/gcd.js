/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if(typeof a !== 'number' || typeof b !== 'number') return 0;

  let greaterVal = Math.max(a,b);
  let lesserVal;
  
  greaterVal === a ? lesserVal = b : lesserVal = a;

  let divisor = lesserVal;

  //loop through and search for divisor of both greaterVal and lesserVal starting at lesserVal
  while(divisor !== 1) {
    if(greaterVal % divisor === 0 && lesserVal % divisor === 0){
      return divisor;
    }
    divisor -= 1;
  }
    return divisor; 
}

// console.log(gcd(20,8));
module.exports = gcd;