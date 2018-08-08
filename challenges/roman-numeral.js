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


 const hundreds = {
   1:'C',
   4:'CD',
   5:'D',
   9:'CM',
 }

 const tens = {
   1:'X',
   4:'XL',
   5:'L',
   9:'XC',
 }

 const ones = {
   1:'I',
   4:'IV',
   5:'V',
   9:'IX',
 }

 const thous = {
   1:'M',
 }


 const digitMultiple = {
   'thousand':thous,
   'hundreds':hundreds,
   'tens':tens,
   'ones':ones,
 }

600

 //split into an array, the length will specify how big it is (len 4 -- M, len 3, less than that, etc)


function romanNumeral(n) {
  digitArray = n.toString().split('');

  let romans = [];

  //for each digit, translate and decrement
  let possibleMultiples = ['ones','tens','hundreds','thousand'];
  let j = 0;
  
  for(let i = digitArray.length - 1;i>=0;i--){
    let currentDigit = Number(digitArray[i]);
    if(j>3){
      j = 3;
    }
    let translator = digitMultiple[possibleMultiples[j]];
    while(currentDigit){
      let currentRomans = [];
      let romanNumeral = translator[currentDigit];
      if(romanNumeral){
        currentRomans.push(romanNumeral)
        currentDigit = 0;
      }else if (romanNumeral === undefined){
        romanNumeral = translator[1];
        currentDigit--;
        currentRomans.push(romanNumeral)
      }else{
        continue;
      }
      currentRomans.reverse();
      romans.push(currentRomans);
    }
    j++;
  }
  romans.reverse();
  return romans.join('');
}

console.log(romanNumeral(2432));

module.exports = romanNumeral;
