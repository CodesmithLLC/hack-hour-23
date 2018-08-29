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
 * 1 - I
 * 5 - V 
 * 10 - X
 * 50 - L
 * 100 - C
 * 500 - D
 * 1000 - M
 * 
 * normally, small number comes after bigger number (500+100 === DC)
 * 
 */

function romanNumeral(n) {
  //if n is 0 / not an integer / over 3999
  //  return "cannot convert"

  //else
  //  iterate n from right(from units) to left (to thousands)
  //    if i is length-1 (unit)
  //      


}

module.exports = romanNumeral;
