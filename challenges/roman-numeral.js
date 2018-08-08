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

let numeralMap = {
    1: "I",
    5: "V",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  }
  
  function romanNumeral(n) {
    let numeralKeys = Object.keys(numeralMap);
  
    if(n <= 0) {
      return "";
    }
  
    if(n === 1) {
      return "I";
    }
  
    for(let i = 0; i < numeralKeys.length; i++) {
      if(numeralKeys[i]<= n && numeralKeys[i+1] > n || i === numeralKeys.length - 1){
        if(i !== numeralKeys.length - 1 && n + 1 == numeralKeys[i+1]){
          return ("I" + romanNumeral(n+1));
        } else {
          return numeralMap[numeralKeys[i]] + romanNumeral(n-numeralKeys[i]);
        }
      }
    }
  }

module.exports = romanNumeral;
