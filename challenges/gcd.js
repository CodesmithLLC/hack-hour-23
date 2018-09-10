/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {

  function findDivisors (number) {
    const output = [];
    for(let i=1; i<=number; i++){
      if(number % i === 0){
        output.push(i)
      }
    }
    return output;
  }

  const aDivisors = findDivisors(a);
  const bDivisors = findDivisors(b);

  for(let i = aDivisors.length-1; i >= 0; i--){
    
  }
}

const e = [1, 2, 3, 4, 5];
const r = [1, 2, 3, 4, 5, 6, 7, 8];

for(i = r.length && e.length; i>=0; i++){
  console.log (i)
}

module.exports = gcd;