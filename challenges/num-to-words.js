// Write a function that takes a number as an argument and returns its english word representation 
// as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
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

  singleDigitsNums = [0,1,2,3,4,5,6,7,8,9]
  singleDigitsStrings = ["zero","one","two","three","four","five","six","seven","eight","nine"]

  const twoDigitsNums = [10,11,12,13,14,15,16,17,18,19]
  const twoDigitsStrings = ["ten","eleven","twelve","thirteen","forteen","fifthteen","sixteen","seventeen","eighteen","nineteen"]
  
  
  const tensMultipleNums = [20,30,40,50,60,70,80,90]
  const tensMultipleStrings = ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]

  const tensPowerNums = [100, 1000, 1000000, 1000000000] 
  const tensPowerStrings = ["hundred", "thousand", "million", "billion"]

  let numString = '';
  for (let i = tensPowerNums.length - 1; i > 0; i -= 1){
    if (num / tensPowerNums[i] >= 1){
      const count = Math.floor(num / tensPowerNums[i])
      
    }
  }
  
}
console.log(10 / 100)

module.exports = numToWords;
