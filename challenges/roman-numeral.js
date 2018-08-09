/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V *
 *      9     ->    IX
 *      10    ->    X *
 *      40    ->    XL
 *      50    ->    L *
 *      90    ->    XC
 *      100   ->    C *
 *      400   ->    CD
 *      500   ->    D *
 *      900   ->    CM
 *      1000  ->    M *
 * 
 */

function romanNumeral(n) {
  const whenInRome = {
    ones: {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
    },
    tens: {
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
    },
    hundreds: {
      100: 'C',
      400: 'CD',
      500: 'D',
      900: 'CM',
    },
    thousands: {
      1000: 'M',
    },
  };
  const nums = ('' + n).split('');
  const numerals = Object.values(whenInRome); // array
  const result = [];
  let loops = nums.length - 1;
  let tenths = 0;
  for (loops; loops >= 0; loops--) {
    let num = Math.pow(10, tenths) * nums[loops];
    if (numerals[tenths][num]) result.unshift(numerals[tenths][num]);
    else {
      if (parseInt((num+"")[0]) < 5) {
        result.unshift(numerals[tenths][parseInt(Object.keys(numerals[tenths])[0])].repeat(parseInt((num+"")[0])));
      } else {
        result.unshift(numerals[tenths][parseInt(Object.keys(numerals[tenths])[2])] + 
        numerals[tenths][parseInt(Object.keys(numerals[tenths])[0])].repeat(parseInt((num+"")[0] - 5)));
      }
    }
    tenths++;
  }
  return result.join('');
}
console.log(romanNumeral(1289));
module.exports = romanNumeral;
