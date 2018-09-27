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

function romanNumeral(num) {
  const values = [[1000, 'M'], [900, 'CD'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'],
  [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];

  let result = '';

  values.forEach(value => {
    const timesFound = Math.floor(num / value[0]);
    result += value[1].repeat(timesFound);
    if (timesFound) {
      num -= timesFound * value[0];
      }
  })
  return result
}

module.exports = romanNumeral;
