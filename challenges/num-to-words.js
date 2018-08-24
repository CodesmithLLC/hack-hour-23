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

function numToWords(num, result = '') {
  const obj = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
    20: 'Twenty',
    30: 'Thirty',
    40: 'Forty',
    50: 'Fifty',
    60: 'Sixty',
    70: 'Seventy',
    80: 'Eighty',
    90: 'Ninety'
  }
  let string = num.toString();

  if (result !== '' && string.substring(1).split('').every(e => e === '0')) return result;
  if (obj[num] !== undefined) {
    result += obj[num];
    return result;
  }
  if (string.length >= 16) {
    result += numToWords(string.substring(0, string.length - 15)) + 'Quadrillion';
    string = string.substring(string.length - 15);
  } else if (string.length >= 13) {
    result += numToWords(string.substring(0, string.length - 12)) + 'Trillion';
    string = string.substring(string.length - 12);
  } else if (string.length >= 10) {
    result += numToWords(string.substring(0, string.length - 9)) + 'Billion';
    string = string.substring(string.length - 9);
  } else if (string.length >= 7) {
    result += numToWords(string.substring(0, string.length - 6)) + 'Million';
    string = string.substring(string.length - 6);
  } else if (string.length >= 4) {
    result += numToWords(string.substring(0, string.length - 3)) + 'Thousand';
    string = string.substring(string.length - 3);
  } else if (string.length >= 3) {
    result += obj[string[0]] + 'Hundred';
    string = string.substring(1);
  } else if (string.length >= 2) {
    result += obj[string[0] + '0'] + obj[string[1]]
    return result;
  }

  return numToWords(string, result);
}

module.exports = numToWords;
