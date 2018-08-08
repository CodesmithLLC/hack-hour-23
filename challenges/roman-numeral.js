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

  const conversions = [{1000: 'M'}, {900: 'CM'}, {500: 'D'}, {400: 'CD'}, {100: 'C'}, {90: 'XC'},
                        {50: 'L'}, {40: 'XL'}, {10: 'X'}, {9: 'IX'}, {5: 'V'}, {4: 'IV'}, {1: 'I'}];
  
  return conversions.reduce((acc, pair) => {
    for (let key in pair) {
      while (n !== 0 && n % key === 0) {
        acc += pair[key];
        n -= key;
      }
    }
    return acc;
  }, '');
}

console.log(romanNumeral(0));        // ->    0
console.log(romanNumeral());        // ->    ''
console.log(romanNumeral(1));        // ->    I
console.log(romanNumeral(3));        // ->    I
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
