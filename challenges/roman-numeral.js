/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {

  if (n < 1) return 0;
  n = Math.floor(n);

  const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
  let final = '';
  
  for (let i = 0; i < decimal.length; i++) {
    if (n % decimal[i] === 0) {
      final += roman[i];
      n -= decimal[i];
      if (n === 0) break;
    }
  }

  return final;
}

console.log(romanNumeral(0));        // ->    I
console.log(romanNumeral());        // ->    I
console.log(romanNumeral(1));        // ->    I
console.log(romanNumeral(4));        // ->    IV
console.log(romanNumeral(5));        // ->    V
console.log(romanNumeral(9));        // ->    IX
console.log(romanNumeral(10));        // ->    X
console.log(romanNumeral(40));        // ->    XL
console.log(romanNumeral(50));        // ->    L
console.log(romanNumeral(90));        // ->    XC
console.log(romanNumeral(100));       // ->    C
console.log(romanNumeral(400));       // ->    CD
console.log(romanNumeral(500));       // ->    D
console.log(romanNumeral(900));       // ->    CM
console.log(romanNumeral(1000));      // ->    M

module.exports = romanNumeral;
