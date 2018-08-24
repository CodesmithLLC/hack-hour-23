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

  //get length of number
  //recursively call the function numToWords
    //base case num.length = 1

  let length = num.toString().length;
  let num2Str = num.toString();
  let string = '';
  console.log(num2Str);
  console.log(length);
  console.log(num2Str[0]);
  if(length === 2){
    if(num2Str[0] === '1'){
      if(num2Str === '11') return 'Eleven';
      if(num2Str === '12') return 'Twelve';
      if(num2Str === '13') return 'Thirteen';
      if(num2Str === '14') return 'Fourteen';
      if(num2Str === '15') return 'Fifteen';
      if(num2Str === '16') return 'Sixteen';
      if(num2Str === '17') return 'Seventeen';
      if(num2Str === '18') return 'Eighteen';
      if(num2Str === '19') return 'Nineen';
    }else{
      if(num2Str[0] === '2') string += 'Twenty';
      if(num2Str[0] === '3') string += 'Thirty';
      if(num2Str[0] === '4') string += 'Fourty';
      if(num2Str[0] === '5') string += 'Fifty';
      if(num2Str[0] === '6') string += 'Sixty';
      if(num2Str[0] === '7') string += 'Seventy';
      if(num2Str[0] === '8') string += 'Eighty';
      if(num2Str[0] === '9') string += 'Ninety';
      return string + numToWords(Number(num2Str.slice(1)));
    }
  }else{
    switch(num2Str[0]){
      case '1': 
        string += 'One';
        break;
      case '2':
        string += 'Two';
        break;
      case '3':
        string += 'Three';
        break;
      case '4':
        string += 'Four';
        break;
      case '5':
        string += 'Five';
        break;
      case '6':
        string += 'Six';
        break;
      case '7':
        string += 'Seven';
        break;
      case '8':
        string += 'Eight';
        break;
      case '9':
        string += 'Nine';
        break;
    }
  }


  if(length % 3 === 0) {
    string += 'Hundred';
  }
  if(length % 4 === 0) {
    string += 'Thousand';
  }
  if(length % 7 === 0){
    string += 'Million';
  }

  if(length !== 1){
    return string + numToWords(Number(num2Str.slice(1)));
  }else {
    return string;
  }  

}


// console.log(numToWords(9999));

module.exports = numToWords;
