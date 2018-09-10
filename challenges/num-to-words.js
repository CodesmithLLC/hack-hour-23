// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {
  //throws some commas in dat num
  let numStr = JSON.stringify(num);
  let newStr = numStr.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  let dumArr = newStr.split(',');
  let thouArr = ['thousand', 'million', 'billion', 'trillion', 'quadrillion',
    'quintillion', 'sextillion', 'septillion', 'octillion',
    'nonillion', 'decillion'
  ];
  let numObj = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  };
 let tensObj = {
   20: 'twenty',
   30: 'thirty',
   40: 'fourty',
   50: 'fifty',
   60: 'sixty',
   70: 'seventy',
   80: 'eightty',
   90: 'ninety',
 }
 let hundreds = {
   100: 'OneHundred',
   200: 'TwoHundred',
   300: 'ThreeHundred',
   400: 'FourHundred',
   500: 'FiveHundred',
   600: 'SixHundred',
   700: 'SevenHundred',
   800: 'EightHundred',
   900: 'NineHundred',
 }
 let thouCount = 0;
 for (let i = dumArr.length - 1; i = 0; i--) {
   
 }
 return dumArr;
}

console.log(numToWords(92120000000000000)); //-> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
module.exports = numToWords;
